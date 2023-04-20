import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_ENDPOINT;

// ----------------------------GET POSTS CARDS----------------------------
export const getPosts = async () => {
	const query = gql`
		query Posts {
			postsConnection {
				edges {
					node {
						author {
							name
							bio
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						postImages {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};

// ----------------------------GET POST DETAILS FOR EACH PAGE ARTICLE CARDS----------------------------
export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				title
				excerpt
				featuredImage {
					url
				}
				author {
					name
					bio
					photo {
						url
					}
				}
				createdAt
				slug
				content {
					html
				}
				postImages {
					url
				}
				categories {
					name
					slug
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.post;
};

// ----------------------------GET RECENT POSTS----------------------------

export const getRecentPosts = async () => {
	const query = gql`
		query GetPostDetails() {
			posts(
				orderBy: createdAt_ASC
				last: 3
				) {
					title
					featuredImage {
						url
					}
					createdAt
					slug
				}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.posts;
};

// ----------------------------GET RECENT POSTS----------------------------

export const getSimilarPosts = async (categories, slug) => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(
				where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query, { categories, slug });

	return result.posts;
};

// ----------------------------COMMENTS POST AND GET ----------------------------

export const submitComment = async (obj) => {
	const result = await fetch('/api/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(obj),
	});

	return result.json();
};

export const getComments = async (slug) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				name
				createdAt
				comment
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.comments;
};

// -----------------------------------------------GET CATEGORY POSTS-----------------------------------------------
export const getCategoryPost = async (slug) => {
	const query = gql`
		query GetCategoryPost($slug: String!) {
			postsConnection(where: { categories_some: { slug: $slug } }) {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.postsConnection.edges;
};

// ----------------------------GET LIST OF CATEGORIES----------------------------
export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.categories;
};
