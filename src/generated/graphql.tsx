import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  users: Array<User>;
  book: Book;
  books: Array<Book>;
  searchBook: Array<BookDepositorySuggestion>;
  authors: Array<Author>;
  wishlist: Wishlist;
  wishlists: Array<Wishlist>;
};


export type QueryBookArgs = {
  ISBN13?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['String']>;
};


export type QuerySearchBookArgs = {
  searchString: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  wishlists?: Maybe<Array<Wishlist>>;
  books?: Maybe<Array<Book>>;
};

export type Wishlist = {
  __typename?: 'Wishlist';
  id: Scalars['String'];
  title: Scalars['String'];
  isDefault: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  owner: User;
  books?: Maybe<Array<Book>>;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['String'];
  title: Scalars['String'];
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  identifiers: BookIdentifiers;
  synopsis?: Maybe<Scalars['String']>;
  numberOfPages?: Maybe<Scalars['Float']>;
  publishDate?: Maybe<Scalars['String']>;
  authors: Array<Author>;
  wishlists?: Maybe<Array<Wishlist>>;
};

export type BookIdentifiers = {
  __typename?: 'BookIdentifiers';
  openlibrary?: Maybe<Scalars['String']>;
  goodreads?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  identifiers: AuthorIdentifiers;
  books: Array<Book>;
};

export type AuthorIdentifiers = {
  __typename?: 'AuthorIdentifiers';
  openlibrary?: Maybe<Scalars['String']>;
  goodreads?: Maybe<Scalars['String']>;
};

export type BookDepositorySuggestion = {
  __typename?: 'BookDepositorySuggestion';
  title: Scalars['String'];
  isbn13: Scalars['String'];
  format: Scalars['String'];
  contributors: Array<Scalars['String']>;
  coverUrl: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: Scalars['String'];
  createUser: User;
  addBook: Book;
  assignBook: Author;
};


export type MutationAuthenticateArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationAddBookArgs = {
  isbn: Scalars['String'];
};


export type MutationAssignBookArgs = {
  authorId: Scalars['String'];
  bookId: Scalars['String'];
};

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'id'>
  )> }
);

export type BookSummaryQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type BookSummaryQuery = (
  { __typename?: 'Query' }
  & { book: (
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'isbn13'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'name'>
    )> }
  ) }
);

export type BookDetailsQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type BookDetailsQuery = (
  { __typename?: 'Query' }
  & { book: (
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'isbn13' | 'numberOfPages' | 'synopsis' | 'publishDate'>
    & { authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'name'>
    )>, wishlists?: Maybe<Array<(
      { __typename?: 'Wishlist' }
      & Pick<Wishlist, 'id' | 'title'>
    )>> }
  ) }
);


export const BooksDocument = gql`
    query books {
  books {
    id
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return ApolloReactHooks.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = ApolloReactCommon.QueryResult<BooksQuery, BooksQueryVariables>;
export const BookSummaryDocument = gql`
    query bookSummary($bookId: String!) {
  book(bookId: $bookId) {
    id
    title
    isbn13
    authors {
      name
    }
  }
}
    `;

/**
 * __useBookSummaryQuery__
 *
 * To run a query within a React component, call `useBookSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookSummaryQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useBookSummaryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookSummaryQuery, BookSummaryQueryVariables>) {
        return ApolloReactHooks.useQuery<BookSummaryQuery, BookSummaryQueryVariables>(BookSummaryDocument, baseOptions);
      }
export function useBookSummaryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookSummaryQuery, BookSummaryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookSummaryQuery, BookSummaryQueryVariables>(BookSummaryDocument, baseOptions);
        }
export type BookSummaryQueryHookResult = ReturnType<typeof useBookSummaryQuery>;
export type BookSummaryLazyQueryHookResult = ReturnType<typeof useBookSummaryLazyQuery>;
export type BookSummaryQueryResult = ApolloReactCommon.QueryResult<BookSummaryQuery, BookSummaryQueryVariables>;
export const BookDetailsDocument = gql`
    query bookDetails($bookId: String!) {
  book(bookId: $bookId) {
    id
    title
    isbn13
    numberOfPages
    synopsis
    publishDate
    authors {
      id
      name
    }
    wishlists {
      id
      title
    }
  }
}
    `;

/**
 * __useBookDetailsQuery__
 *
 * To run a query within a React component, call `useBookDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookDetailsQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useBookDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookDetailsQuery, BookDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<BookDetailsQuery, BookDetailsQueryVariables>(BookDetailsDocument, baseOptions);
      }
export function useBookDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookDetailsQuery, BookDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookDetailsQuery, BookDetailsQueryVariables>(BookDetailsDocument, baseOptions);
        }
export type BookDetailsQueryHookResult = ReturnType<typeof useBookDetailsQuery>;
export type BookDetailsLazyQueryHookResult = ReturnType<typeof useBookDetailsLazyQuery>;
export type BookDetailsQueryResult = ApolloReactCommon.QueryResult<BookDetailsQuery, BookDetailsQueryVariables>;