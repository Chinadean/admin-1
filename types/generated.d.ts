type Maybe<T> = T;
type InputMaybe<T> = T;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

type Activity = {
  __typename?: 'Activity';
  categories?: Maybe<CategoryRelationResponseCollection>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  likes?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ActivityRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};


type ActivityCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ActivityLocalizationsArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ActivityTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ActivityEntity = {
  __typename?: 'ActivityEntity';
  attributes?: Maybe<Activity>;
  id?: Maybe<Scalars['ID']>;
};

type ActivityEntityResponse = {
  __typename?: 'ActivityEntityResponse';
  data?: Maybe<ActivityEntity>;
};

type ActivityEntityResponseCollection = {
  __typename?: 'ActivityEntityResponseCollection';
  data: Array<ActivityEntity>;
  meta: ResponseCollectionMeta;
};

type ActivityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ActivityFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  likes?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ActivityFiltersInput>;
  not?: InputMaybe<ActivityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ActivityFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<IntFilterInput>;
};

type ActivityInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['ID']>;
  likes?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

type ActivityRelationResponseCollection = {
  __typename?: 'ActivityRelationResponseCollection';
  data: Array<ActivityEntity>;
};

type Announcement = {
  __typename?: 'Announcement';
  categories?: Maybe<CategoryRelationResponseCollection>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  dateEnd?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  likes?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AnnouncementRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};


type AnnouncementCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type AnnouncementLocalizationsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type AnnouncementTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type AnnouncementEntity = {
  __typename?: 'AnnouncementEntity';
  attributes?: Maybe<Announcement>;
  id?: Maybe<Scalars['ID']>;
};

type AnnouncementEntityResponse = {
  __typename?: 'AnnouncementEntityResponse';
  data?: Maybe<AnnouncementEntity>;
};

type AnnouncementEntityResponseCollection = {
  __typename?: 'AnnouncementEntityResponseCollection';
  data: Array<AnnouncementEntity>;
  meta: ResponseCollectionMeta;
};

type AnnouncementFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AnnouncementFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  dateEnd?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  likes?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AnnouncementFiltersInput>;
  not?: InputMaybe<AnnouncementFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AnnouncementFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<IntFilterInput>;
};

type AnnouncementInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  dateEnd?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  likes?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

type AnnouncementRelationResponseCollection = {
  __typename?: 'AnnouncementRelationResponseCollection';
  data: Array<AnnouncementEntity>;
};

type Applicant = {
  __typename?: 'Applicant';
  applications?: Maybe<ApplicationRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


type ApplicantApplicationsArgs = {
  filters?: InputMaybe<ApplicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ApplicantEntity = {
  __typename?: 'ApplicantEntity';
  attributes?: Maybe<Applicant>;
  id?: Maybe<Scalars['ID']>;
};

type ApplicantEntityResponse = {
  __typename?: 'ApplicantEntityResponse';
  data?: Maybe<ApplicantEntity>;
};

type ApplicantEntityResponseCollection = {
  __typename?: 'ApplicantEntityResponseCollection';
  data: Array<ApplicantEntity>;
  meta: ResponseCollectionMeta;
};

type ApplicantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ApplicantFiltersInput>>>;
  applications?: InputMaybe<ApplicationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ApplicantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApplicantFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

type ApplicantInput = {
  applications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['ID']>;
};

type Application = {
  __typename?: 'Application';
  applicant?: Maybe<ApplicantEntityResponse>;
  competition?: Maybe<CompetitionEntityResponse>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image: UploadFileEntityResponse;
  juriVotes?: Maybe<JuriVoteRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ApplicationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  votes?: Maybe<VoteRelationResponseCollection>;
};


type ApplicationJuriVotesArgs = {
  filters?: InputMaybe<JuriVoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ApplicationLocalizationsArgs = {
  filters?: InputMaybe<ApplicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ApplicationTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ApplicationVotesArgs = {
  filters?: InputMaybe<VoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ApplicationEntity = {
  __typename?: 'ApplicationEntity';
  attributes?: Maybe<Application>;
  id?: Maybe<Scalars['ID']>;
};

type ApplicationEntityResponse = {
  __typename?: 'ApplicationEntityResponse';
  data?: Maybe<ApplicationEntity>;
};

type ApplicationEntityResponseCollection = {
  __typename?: 'ApplicationEntityResponseCollection';
  data: Array<ApplicationEntity>;
  meta: ResponseCollectionMeta;
};

type ApplicationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ApplicationFiltersInput>>>;
  applicant?: InputMaybe<ApplicantFiltersInput>;
  competition?: InputMaybe<CompetitionFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  juriVotes?: InputMaybe<JuriVoteFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ApplicationFiltersInput>;
  not?: InputMaybe<ApplicationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApplicationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  votes?: InputMaybe<VoteFiltersInput>;
};

type ApplicationInput = {
  applicant?: InputMaybe<Scalars['ID']>;
  competition?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  juriVotes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

type ApplicationRelationResponseCollection = {
  __typename?: 'ApplicationRelationResponseCollection';
  data: Array<ApplicationEntity>;
};

type Art = {
  __typename?: 'Art';
  artist?: Maybe<ArtistEntityResponse>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  images: UploadFileRelationResponseCollection;
  likes?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ArtRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type ArtCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ArtImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ArtLocalizationsArgs = {
  filters?: InputMaybe<ArtFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type ArtTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ArtEntity = {
  __typename?: 'ArtEntity';
  attributes?: Maybe<Art>;
  id?: Maybe<Scalars['ID']>;
};

type ArtEntityResponse = {
  __typename?: 'ArtEntityResponse';
  data?: Maybe<ArtEntity>;
};

type ArtEntityResponseCollection = {
  __typename?: 'ArtEntityResponseCollection';
  data: Array<ArtEntity>;
  meta: ResponseCollectionMeta;
};

type ArtFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArtFiltersInput>>>;
  artist?: InputMaybe<ArtistFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  likes?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArtFiltersInput>;
  not?: InputMaybe<ArtFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArtFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type ArtInput = {
  artist?: InputMaybe<Scalars['ID']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  likes?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

type ArtRelationResponseCollection = {
  __typename?: 'ArtRelationResponseCollection';
  data: Array<ArtEntity>;
};

type Artist = {
  __typename?: 'Artist';
  arts?: Maybe<ArtRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  volunteer?: Maybe<VolunteerEntityResponse>;
};


type ArtistArtsArgs = {
  filters?: InputMaybe<ArtFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ArtistEntity = {
  __typename?: 'ArtistEntity';
  attributes?: Maybe<Artist>;
  id?: Maybe<Scalars['ID']>;
};

type ArtistEntityResponse = {
  __typename?: 'ArtistEntityResponse';
  data?: Maybe<ArtistEntity>;
};

type ArtistEntityResponseCollection = {
  __typename?: 'ArtistEntityResponseCollection';
  data: Array<ArtistEntity>;
  meta: ResponseCollectionMeta;
};

type ArtistFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArtistFiltersInput>>>;
  arts?: InputMaybe<ArtFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArtistFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArtistFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  volunteer?: InputMaybe<VolunteerFiltersInput>;
};

type ArtistInput = {
  arts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  volunteer?: InputMaybe<Scalars['ID']>;
};

type Author = {
  __typename?: 'Author';
  blogs?: Maybe<BlogRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  volunteer?: Maybe<VolunteerEntityResponse>;
};


type AuthorBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']>;
};

type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  data: Array<AuthorEntity>;
  meta: ResponseCollectionMeta;
};

type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  volunteer?: InputMaybe<VolunteerFiltersInput>;
};

type AuthorInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  volunteer?: InputMaybe<Scalars['ID']>;
};

type Blog = {
  __typename?: 'Blog';
  author?: Maybe<AuthorEntityResponse>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  likes?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
};


type BlogCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type BlogLocalizationsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type BlogTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']>;
};

type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  likes?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogFiltersInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<IntFilterInput>;
};

type BlogInput = {
  author?: InputMaybe<Scalars['ID']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  likes?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

type Category = {
  __typename?: 'Category';
  activities?: Maybe<ActivityRelationResponseCollection>;
  announcements?: Maybe<AnnouncementRelationResponseCollection>;
  arts?: Maybe<ArtRelationResponseCollection>;
  blogs?: Maybe<BlogRelationResponseCollection>;
  code?: Maybe<Scalars['String']>;
  competitions?: Maybe<CompetitionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hashtags?: Maybe<HashtagRelationResponseCollection>;
  mentions?: Maybe<MentionRelationResponseCollection>;
  name_en?: Maybe<Scalars['String']>;
  name_nl?: Maybe<Scalars['String']>;
  name_tr?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type CategoryActivitiesArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CategoryAnnouncementsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CategoryArtsArgs = {
  filters?: InputMaybe<ArtFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CategoryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CategoryCompetitionsArgs = {
  filters?: InputMaybe<CompetitionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CategoryHashtagsArgs = {
  filters?: InputMaybe<HashtagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CategoryMentionsArgs = {
  filters?: InputMaybe<MentionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

type CategoryFiltersInput = {
  activities?: InputMaybe<ActivityFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  announcements?: InputMaybe<AnnouncementFiltersInput>;
  arts?: InputMaybe<ArtFiltersInput>;
  blogs?: InputMaybe<BlogFiltersInput>;
  code?: InputMaybe<StringFilterInput>;
  competitions?: InputMaybe<CompetitionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hashtags?: InputMaybe<HashtagFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  mentions?: InputMaybe<MentionFiltersInput>;
  name_en?: InputMaybe<StringFilterInput>;
  name_nl?: InputMaybe<StringFilterInput>;
  name_tr?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type CategoryInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  announcements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  arts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  code?: InputMaybe<Scalars['String']>;
  competitions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  hashtags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  mentions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name_en?: InputMaybe<Scalars['String']>;
  name_nl?: InputMaybe<Scalars['String']>;
  name_tr?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

type CommentsComment = {
  __typename?: 'CommentsComment';
  approvalStatus?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorUser?: Maybe<UsersPermissionsUserEntityResponse>;
  blockReason?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  related?: Maybe<Scalars['String']>;
  removed?: Maybe<Scalars['Boolean']>;
  reports?: Maybe<CommentsCommentReportRelationResponseCollection>;
  threadOf?: Maybe<CommentsCommentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type CommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type CommentsCommentEntity = {
  __typename?: 'CommentsCommentEntity';
  attributes?: Maybe<CommentsComment>;
  id?: Maybe<Scalars['ID']>;
};

type CommentsCommentEntityResponse = {
  __typename?: 'CommentsCommentEntityResponse';
  data?: Maybe<CommentsCommentEntity>;
};

type CommentsCommentEntityResponseCollection = {
  __typename?: 'CommentsCommentEntityResponseCollection';
  data: Array<CommentsCommentEntity>;
  meta: ResponseCollectionMeta;
};

type CommentsCommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  approvalStatus?: InputMaybe<StringFilterInput>;
  authorAvatar?: InputMaybe<StringFilterInput>;
  authorEmail?: InputMaybe<StringFilterInput>;
  authorId?: InputMaybe<StringFilterInput>;
  authorName?: InputMaybe<StringFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  blockReason?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  blockedThread?: InputMaybe<BooleanFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentsCommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentFiltersInput>>>;
  related?: InputMaybe<StringFilterInput>;
  removed?: InputMaybe<BooleanFilterInput>;
  reports?: InputMaybe<CommentsCommentReportFiltersInput>;
  threadOf?: InputMaybe<CommentsCommentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type CommentsCommentInput = {
  approvalStatus?: InputMaybe<Scalars['String']>;
  authorAvatar?: InputMaybe<Scalars['String']>;
  authorEmail?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  authorUser?: InputMaybe<Scalars['ID']>;
  blockReason?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  blockedThread?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  related?: InputMaybe<Scalars['String']>;
  removed?: InputMaybe<Scalars['Boolean']>;
  reports?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  threadOf?: InputMaybe<Scalars['ID']>;
};

type CommentsCommentReport = {
  __typename?: 'CommentsCommentReport';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  reason: Enum_Commentscommentreport_Reason;
  related?: Maybe<CommentsCommentEntityResponse>;
  resolved?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

type CommentsCommentReportEntity = {
  __typename?: 'CommentsCommentReportEntity';
  attributes?: Maybe<CommentsCommentReport>;
  id?: Maybe<Scalars['ID']>;
};

type CommentsCommentReportEntityResponse = {
  __typename?: 'CommentsCommentReportEntityResponse';
  data?: Maybe<CommentsCommentReportEntity>;
};

type CommentsCommentReportEntityResponseCollection = {
  __typename?: 'CommentsCommentReportEntityResponseCollection';
  data: Array<CommentsCommentReportEntity>;
  meta: ResponseCollectionMeta;
};

type CommentsCommentReportFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentsCommentReportFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentsCommentReportFiltersInput>>>;
  reason?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<CommentsCommentFiltersInput>;
  resolved?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type CommentsCommentReportInput = {
  content?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Enum_Commentscommentreport_Reason>;
  related?: InputMaybe<Scalars['ID']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
};

type CommentsCommentReportRelationResponseCollection = {
  __typename?: 'CommentsCommentReportRelationResponseCollection';
  data: Array<CommentsCommentReportEntity>;
};

type Competition = {
  __typename?: 'Competition';
  applications?: Maybe<ApplicationRelationResponseCollection>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  dateEnd?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CompetitionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type CompetitionApplicationsArgs = {
  filters?: InputMaybe<ApplicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CompetitionCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type CompetitionLocalizationsArgs = {
  filters?: InputMaybe<CompetitionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type CompetitionEntity = {
  __typename?: 'CompetitionEntity';
  attributes?: Maybe<Competition>;
  id?: Maybe<Scalars['ID']>;
};

type CompetitionEntityResponse = {
  __typename?: 'CompetitionEntityResponse';
  data?: Maybe<CompetitionEntity>;
};

type CompetitionEntityResponseCollection = {
  __typename?: 'CompetitionEntityResponseCollection';
  data: Array<CompetitionEntity>;
  meta: ResponseCollectionMeta;
};

type CompetitionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CompetitionFiltersInput>>>;
  applications?: InputMaybe<ApplicationFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  dateEnd?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CompetitionFiltersInput>;
  not?: InputMaybe<CompetitionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CompetitionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type CompetitionInput = {
  applications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  dateEnd?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

type CompetitionRelationResponseCollection = {
  __typename?: 'CompetitionRelationResponseCollection';
  data: Array<CompetitionEntity>;
};

type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

type Donate = {
  __typename?: 'Donate';
  adddress?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  mollieId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

type DonateEntity = {
  __typename?: 'DonateEntity';
  attributes?: Maybe<Donate>;
  id?: Maybe<Scalars['ID']>;
};

type DonateEntityResponse = {
  __typename?: 'DonateEntityResponse';
  data?: Maybe<DonateEntity>;
};

type DonateEntityResponseCollection = {
  __typename?: 'DonateEntityResponseCollection';
  data: Array<DonateEntity>;
  meta: ResponseCollectionMeta;
};

type DonateFiltersInput = {
  adddress?: InputMaybe<StringFilterInput>;
  amount?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DonateFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mollieId?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DonateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DonateFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type DonateInput = {
  adddress?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  email?: InputMaybe<Scalars['String']>;
  mollieId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

enum Enum_Commentscommentreport_Reason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER'
}

enum Enum_Langrole_Role {
  EnNl = 'en_nl',
  EnTr = 'en_tr',
  NlEn = 'nl_en',
  NlTr = 'nl_tr',
  TrEn = 'tr_en',
  TrNl = 'tr_nl'
}

enum Enum_Volunteer_Country {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  St = 'ST',
  Sv = 'SV',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

type GenericMorph = Activity | Announcement | Applicant | Application | Art | Artist | Author | Blog | Category | CommentsComment | CommentsCommentReport | Competition | Donate | Hashtag | I18NLocale | Job | Juri | JuriVote | LangRole | Mention | Post | Privacy | Project | Tag | Term | Translator | Trend | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Volunteer | Vote;

type Hashtag = {
  __typename?: 'Hashtag';
  categories?: Maybe<CategoryRelationResponseCollection>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  hashtag: Scalars['String'];
  hashtag_extra?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HashtagRelationResponseCollection>;
  mentions?: Maybe<MentionRelationResponseCollection>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tweets?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type HashtagCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type HashtagLocalizationsArgs = {
  filters?: InputMaybe<HashtagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type HashtagMentionsArgs = {
  filters?: InputMaybe<MentionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type HashtagPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type HashtagEntity = {
  __typename?: 'HashtagEntity';
  attributes?: Maybe<Hashtag>;
  id?: Maybe<Scalars['ID']>;
};

type HashtagEntityResponse = {
  __typename?: 'HashtagEntityResponse';
  data?: Maybe<HashtagEntity>;
};

type HashtagEntityResponseCollection = {
  __typename?: 'HashtagEntityResponseCollection';
  data: Array<HashtagEntity>;
  meta: ResponseCollectionMeta;
};

type HashtagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HashtagFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  hashtag?: InputMaybe<StringFilterInput>;
  hashtag_extra?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<HashtagFiltersInput>;
  mentions?: InputMaybe<MentionFiltersInput>;
  not?: InputMaybe<HashtagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HashtagFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  tweets?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type HashtagInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  hashtag?: InputMaybe<Scalars['String']>;
  hashtag_extra?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  mentions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tweets?: InputMaybe<Scalars['JSON']>;
};

type HashtagRelationResponseCollection = {
  __typename?: 'HashtagRelationResponseCollection';
  data: Array<HashtagEntity>;
};

type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

type Job = {
  __typename?: 'Job';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description_en?: Maybe<Scalars['String']>;
  description_nl?: Maybe<Scalars['String']>;
  description_tr?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_nl?: Maybe<Scalars['String']>;
  name_tr?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

type JobEntity = {
  __typename?: 'JobEntity';
  attributes?: Maybe<Job>;
  id?: Maybe<Scalars['ID']>;
};

type JobEntityResponse = {
  __typename?: 'JobEntityResponse';
  data?: Maybe<JobEntity>;
};

type JobEntityResponseCollection = {
  __typename?: 'JobEntityResponseCollection';
  data: Array<JobEntity>;
  meta: ResponseCollectionMeta;
};

type JobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description_en?: InputMaybe<StringFilterInput>;
  description_nl?: InputMaybe<StringFilterInput>;
  description_tr?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name_en?: InputMaybe<StringFilterInput>;
  name_nl?: InputMaybe<StringFilterInput>;
  name_tr?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<JobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  project?: InputMaybe<ProjectFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type JobInput = {
  code?: InputMaybe<Scalars['String']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_nl?: InputMaybe<Scalars['String']>;
  description_tr?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_nl?: InputMaybe<Scalars['String']>;
  name_tr?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

type JobRelationResponseCollection = {
  __typename?: 'JobRelationResponseCollection';
  data: Array<JobEntity>;
};

type Juri = {
  __typename?: 'Juri';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  volunteer?: Maybe<VolunteerEntityResponse>;
  votes?: Maybe<JuriVoteRelationResponseCollection>;
};


type JuriVotesArgs = {
  filters?: InputMaybe<JuriVoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type JuriEntity = {
  __typename?: 'JuriEntity';
  attributes?: Maybe<Juri>;
  id?: Maybe<Scalars['ID']>;
};

type JuriEntityResponse = {
  __typename?: 'JuriEntityResponse';
  data?: Maybe<JuriEntity>;
};

type JuriEntityResponseCollection = {
  __typename?: 'JuriEntityResponseCollection';
  data: Array<JuriEntity>;
  meta: ResponseCollectionMeta;
};

type JuriFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JuriFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<JuriFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JuriFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  volunteer?: InputMaybe<VolunteerFiltersInput>;
  votes?: InputMaybe<JuriVoteFiltersInput>;
};

type JuriInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  volunteer?: InputMaybe<Scalars['ID']>;
  votes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

type JuriVote = {
  __typename?: 'JuriVote';
  application?: Maybe<ApplicationEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  juri?: Maybe<JuriEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

type JuriVoteEntity = {
  __typename?: 'JuriVoteEntity';
  attributes?: Maybe<JuriVote>;
  id?: Maybe<Scalars['ID']>;
};

type JuriVoteEntityResponse = {
  __typename?: 'JuriVoteEntityResponse';
  data?: Maybe<JuriVoteEntity>;
};

type JuriVoteEntityResponseCollection = {
  __typename?: 'JuriVoteEntityResponseCollection';
  data: Array<JuriVoteEntity>;
  meta: ResponseCollectionMeta;
};

type JuriVoteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JuriVoteFiltersInput>>>;
  application?: InputMaybe<ApplicationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  juri?: InputMaybe<JuriFiltersInput>;
  not?: InputMaybe<JuriVoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JuriVoteFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<IntFilterInput>;
};

type JuriVoteInput = {
  application?: InputMaybe<Scalars['ID']>;
  juri?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Int']>;
};

type JuriVoteRelationResponseCollection = {
  __typename?: 'JuriVoteRelationResponseCollection';
  data: Array<JuriVoteEntity>;
};

type LangRole = {
  __typename?: 'LangRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  role: Enum_Langrole_Role;
  translators?: Maybe<TranslatorRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type LangRoleTranslatorsArgs = {
  filters?: InputMaybe<TranslatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type LangRoleEntity = {
  __typename?: 'LangRoleEntity';
  attributes?: Maybe<LangRole>;
  id?: Maybe<Scalars['ID']>;
};

type LangRoleEntityResponse = {
  __typename?: 'LangRoleEntityResponse';
  data?: Maybe<LangRoleEntity>;
};

type LangRoleEntityResponseCollection = {
  __typename?: 'LangRoleEntityResponseCollection';
  data: Array<LangRoleEntity>;
  meta: ResponseCollectionMeta;
};

type LangRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LangRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LangRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LangRoleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  translators?: InputMaybe<TranslatorFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type LangRoleInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<Enum_Langrole_Role>;
  translators?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

type LangRoleRelationResponseCollection = {
  __typename?: 'LangRoleRelationResponseCollection';
  data: Array<LangRoleEntity>;
};

type Mention = {
  __typename?: 'Mention';
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  hashtags?: Maybe<HashtagRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MentionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};


type MentionCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type MentionHashtagsArgs = {
  filters?: InputMaybe<HashtagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type MentionLocalizationsArgs = {
  filters?: InputMaybe<MentionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type MentionEntity = {
  __typename?: 'MentionEntity';
  attributes?: Maybe<Mention>;
  id?: Maybe<Scalars['ID']>;
};

type MentionEntityResponse = {
  __typename?: 'MentionEntityResponse';
  data?: Maybe<MentionEntity>;
};

type MentionEntityResponseCollection = {
  __typename?: 'MentionEntityResponseCollection';
  data: Array<MentionEntity>;
  meta: ResponseCollectionMeta;
};

type MentionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MentionFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  hashtags?: InputMaybe<HashtagFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MentionFiltersInput>;
  not?: InputMaybe<MentionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MentionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

type MentionInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  data?: InputMaybe<Scalars['JSON']>;
  hashtags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

type MentionRelationResponseCollection = {
  __typename?: 'MentionRelationResponseCollection';
  data: Array<MentionEntity>;
};

type Mutation = {
  __typename?: 'Mutation';
  createActivity?: Maybe<ActivityEntityResponse>;
  createActivityLocalization?: Maybe<ActivityEntityResponse>;
  createAnnouncement?: Maybe<AnnouncementEntityResponse>;
  createAnnouncementLocalization?: Maybe<AnnouncementEntityResponse>;
  createApplicant?: Maybe<ApplicantEntityResponse>;
  createApplication?: Maybe<ApplicationEntityResponse>;
  createApplicationLocalization?: Maybe<ApplicationEntityResponse>;
  createArt?: Maybe<ArtEntityResponse>;
  createArtLocalization?: Maybe<ArtEntityResponse>;
  createArtist?: Maybe<ArtistEntityResponse>;
  createAuthor?: Maybe<AuthorEntityResponse>;
  createBlog?: Maybe<BlogEntityResponse>;
  createBlogLocalization?: Maybe<BlogEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  createCommentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  createCompetition?: Maybe<CompetitionEntityResponse>;
  createCompetitionLocalization?: Maybe<CompetitionEntityResponse>;
  createDonate?: Maybe<DonateEntityResponse>;
  createHashtag?: Maybe<HashtagEntityResponse>;
  createHashtagLocalization?: Maybe<HashtagEntityResponse>;
  createJob?: Maybe<JobEntityResponse>;
  createJuri?: Maybe<JuriEntityResponse>;
  createJuriVote?: Maybe<JuriVoteEntityResponse>;
  createLangRole?: Maybe<LangRoleEntityResponse>;
  createMention?: Maybe<MentionEntityResponse>;
  createMentionLocalization?: Maybe<MentionEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createPostLocalization?: Maybe<PostEntityResponse>;
  createPrivacyLocalization?: Maybe<PrivacyEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTermLocalization?: Maybe<TermEntityResponse>;
  createTranslator?: Maybe<TranslatorEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVolunteer?: Maybe<VolunteerEntityResponse>;
  createVote?: Maybe<VoteEntityResponse>;
  deleteActivity?: Maybe<ActivityEntityResponse>;
  deleteAnnouncement?: Maybe<AnnouncementEntityResponse>;
  deleteApplicant?: Maybe<ApplicantEntityResponse>;
  deleteApplication?: Maybe<ApplicationEntityResponse>;
  deleteArt?: Maybe<ArtEntityResponse>;
  deleteArtist?: Maybe<ArtistEntityResponse>;
  deleteAuthor?: Maybe<AuthorEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  deleteCommentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  deleteCompetition?: Maybe<CompetitionEntityResponse>;
  deleteDonate?: Maybe<DonateEntityResponse>;
  deleteHashtag?: Maybe<HashtagEntityResponse>;
  deleteJob?: Maybe<JobEntityResponse>;
  deleteJuri?: Maybe<JuriEntityResponse>;
  deleteJuriVote?: Maybe<JuriVoteEntityResponse>;
  deleteLangRole?: Maybe<LangRoleEntityResponse>;
  deleteMention?: Maybe<MentionEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deletePrivacy?: Maybe<PrivacyEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTerm?: Maybe<TermEntityResponse>;
  deleteTranslator?: Maybe<TranslatorEntityResponse>;
  deleteTrend?: Maybe<TrendEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVolunteer?: Maybe<VolunteerEntityResponse>;
  deleteVote?: Maybe<VoteEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateActivity?: Maybe<ActivityEntityResponse>;
  updateAnnouncement?: Maybe<AnnouncementEntityResponse>;
  updateApplicant?: Maybe<ApplicantEntityResponse>;
  updateApplication?: Maybe<ApplicationEntityResponse>;
  updateArt?: Maybe<ArtEntityResponse>;
  updateArtist?: Maybe<ArtistEntityResponse>;
  updateAuthor?: Maybe<AuthorEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCommentsComment?: Maybe<CommentsCommentEntityResponse>;
  updateCommentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  updateCompetition?: Maybe<CompetitionEntityResponse>;
  updateDonate?: Maybe<DonateEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHashtag?: Maybe<HashtagEntityResponse>;
  updateJob?: Maybe<JobEntityResponse>;
  updateJuri?: Maybe<JuriEntityResponse>;
  updateJuriVote?: Maybe<JuriVoteEntityResponse>;
  updateLangRole?: Maybe<LangRoleEntityResponse>;
  updateMention?: Maybe<MentionEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updatePrivacy?: Maybe<PrivacyEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTerm?: Maybe<TermEntityResponse>;
  updateTranslator?: Maybe<TranslatorEntityResponse>;
  updateTrend?: Maybe<TrendEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVolunteer?: Maybe<VolunteerEntityResponse>;
  updateVote?: Maybe<VoteEntityResponse>;
  upload: UploadFileEntityResponse;
};


type MutationCreateActivityArgs = {
  data: ActivityInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateActivityLocalizationArgs = {
  data?: InputMaybe<ActivityInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateAnnouncementArgs = {
  data: AnnouncementInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateAnnouncementLocalizationArgs = {
  data?: InputMaybe<AnnouncementInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateApplicantArgs = {
  data: ApplicantInput;
};


type MutationCreateApplicationArgs = {
  data: ApplicationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateApplicationLocalizationArgs = {
  data?: InputMaybe<ApplicationInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateArtArgs = {
  data: ArtInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateArtLocalizationArgs = {
  data?: InputMaybe<ArtInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateArtistArgs = {
  data: ArtistInput;
};


type MutationCreateAuthorArgs = {
  data: AuthorInput;
};


type MutationCreateBlogArgs = {
  data: BlogInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


type MutationCreateCommentsCommentArgs = {
  data: CommentsCommentInput;
};


type MutationCreateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput;
};


type MutationCreateCompetitionArgs = {
  data: CompetitionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateCompetitionLocalizationArgs = {
  data?: InputMaybe<CompetitionInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateDonateArgs = {
  data: DonateInput;
};


type MutationCreateHashtagArgs = {
  data: HashtagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateHashtagLocalizationArgs = {
  data?: InputMaybe<HashtagInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateJobArgs = {
  data: JobInput;
};


type MutationCreateJuriArgs = {
  data: JuriInput;
};


type MutationCreateJuriVoteArgs = {
  data: JuriVoteInput;
};


type MutationCreateLangRoleArgs = {
  data: LangRoleInput;
};


type MutationCreateMentionArgs = {
  data: MentionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateMentionLocalizationArgs = {
  data?: InputMaybe<MentionInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreatePostArgs = {
  data: PostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreatePostLocalizationArgs = {
  data?: InputMaybe<PostInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreatePrivacyLocalizationArgs = {
  data?: InputMaybe<PrivacyInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateProjectArgs = {
  data: ProjectInput;
};


type MutationCreateTagArgs = {
  data: TagInput;
};


type MutationCreateTermLocalizationArgs = {
  data?: InputMaybe<TermInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationCreateTranslatorArgs = {
  data: TranslatorInput;
};


type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


type MutationCreateVolunteerArgs = {
  data: VolunteerInput;
};


type MutationCreateVoteArgs = {
  data: VoteInput;
};


type MutationDeleteActivityArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteAnnouncementArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteApplicantArgs = {
  id: Scalars['ID'];
};


type MutationDeleteApplicationArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteArtArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteArtistArgs = {
  id: Scalars['ID'];
};


type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


type MutationDeleteBlogArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


type MutationDeleteCommentsCommentArgs = {
  id: Scalars['ID'];
};


type MutationDeleteCommentsCommentReportArgs = {
  id: Scalars['ID'];
};


type MutationDeleteCompetitionArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteDonateArgs = {
  id: Scalars['ID'];
};


type MutationDeleteHashtagArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteJobArgs = {
  id: Scalars['ID'];
};


type MutationDeleteJuriArgs = {
  id: Scalars['ID'];
};


type MutationDeleteJuriVoteArgs = {
  id: Scalars['ID'];
};


type MutationDeleteLangRoleArgs = {
  id: Scalars['ID'];
};


type MutationDeleteMentionArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeletePostArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeletePrivacyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


type MutationDeleteTermArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationDeleteTranslatorArgs = {
  id: Scalars['ID'];
};


type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


type MutationDeleteVolunteerArgs = {
  id: Scalars['ID'];
};


type MutationDeleteVoteArgs = {
  id: Scalars['ID'];
};


type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


type MutationUpdateActivityArgs = {
  data: ActivityInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateAnnouncementArgs = {
  data: AnnouncementInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateApplicantArgs = {
  data: ApplicantInput;
  id: Scalars['ID'];
};


type MutationUpdateApplicationArgs = {
  data: ApplicationInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateArtArgs = {
  data: ArtInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateArtistArgs = {
  data: ArtistInput;
  id: Scalars['ID'];
};


type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  id: Scalars['ID'];
};


type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


type MutationUpdateCommentsCommentArgs = {
  data: CommentsCommentInput;
  id: Scalars['ID'];
};


type MutationUpdateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput;
  id: Scalars['ID'];
};


type MutationUpdateCompetitionArgs = {
  data: CompetitionInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateDonateArgs = {
  data: DonateInput;
  id: Scalars['ID'];
};


type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


type MutationUpdateHashtagArgs = {
  data: HashtagInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateJobArgs = {
  data: JobInput;
  id: Scalars['ID'];
};


type MutationUpdateJuriArgs = {
  data: JuriInput;
  id: Scalars['ID'];
};


type MutationUpdateJuriVoteArgs = {
  data: JuriVoteInput;
  id: Scalars['ID'];
};


type MutationUpdateLangRoleArgs = {
  data: LangRoleInput;
  id: Scalars['ID'];
};


type MutationUpdateMentionArgs = {
  data: MentionInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdatePrivacyArgs = {
  data: PrivacyInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID'];
};


type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
};


type MutationUpdateTermArgs = {
  data: TermInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type MutationUpdateTranslatorArgs = {
  data: TranslatorInput;
  id: Scalars['ID'];
};


type MutationUpdateTrendArgs = {
  data: TrendInput;
};


type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


type MutationUpdateVolunteerArgs = {
  data: VolunteerInput;
  id: Scalars['ID'];
};


type MutationUpdateVoteArgs = {
  data: VoteInput;
  id: Scalars['ID'];
};


type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

type Post = {
  __typename?: 'Post';
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UsersPermissionsUserEntityResponse>;
  hashtag?: Maybe<HashtagEntityResponse>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<TagRelationResponseCollection>;
  text: Scalars['String'];
  translator?: Maybe<TranslatorEntityResponse>;
  twitterMedia?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type PostLocalizationsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']>;
};

type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creator?: InputMaybe<UsersPermissionsUserFiltersInput>;
  hashtag?: InputMaybe<HashtagFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostFiltersInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  translator?: InputMaybe<TranslatorFiltersInput>;
  twitterMedia?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type PostInput = {
  creator?: InputMaybe<Scalars['ID']>;
  hashtag?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  text?: InputMaybe<Scalars['String']>;
  translator?: InputMaybe<Scalars['ID']>;
  twitterMedia?: InputMaybe<Scalars['String']>;
};

type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

type Privacy = {
  __typename?: 'Privacy';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PrivacyRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type PrivacyLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

type PrivacyEntity = {
  __typename?: 'PrivacyEntity';
  attributes?: Maybe<Privacy>;
  id?: Maybe<Scalars['ID']>;
};

type PrivacyEntityResponse = {
  __typename?: 'PrivacyEntityResponse';
  data?: Maybe<PrivacyEntity>;
};

type PrivacyInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

type PrivacyRelationResponseCollection = {
  __typename?: 'PrivacyRelationResponseCollection';
  data: Array<PrivacyEntity>;
};

type Project = {
  __typename?: 'Project';
  code?: Maybe<Scalars['String']>;
  content_en?: Maybe<Scalars['String']>;
  content_nl?: Maybe<Scalars['String']>;
  content_tr?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description_en?: Maybe<Scalars['String']>;
  description_nl?: Maybe<Scalars['String']>;
  description_tr?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  jobs?: Maybe<JobRelationResponseCollection>;
  link?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  name_nl?: Maybe<Scalars['String']>;
  name_tr?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type ProjectJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']>;
};

type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  content_en?: InputMaybe<StringFilterInput>;
  content_nl?: InputMaybe<StringFilterInput>;
  content_tr?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description_en?: InputMaybe<StringFilterInput>;
  description_nl?: InputMaybe<StringFilterInput>;
  description_tr?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  jobs?: InputMaybe<JobFiltersInput>;
  link?: InputMaybe<StringFilterInput>;
  name_en?: InputMaybe<StringFilterInput>;
  name_nl?: InputMaybe<StringFilterInput>;
  name_tr?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type ProjectInput = {
  code?: InputMaybe<Scalars['String']>;
  content_en?: InputMaybe<Scalars['String']>;
  content_nl?: InputMaybe<Scalars['String']>;
  content_tr?: InputMaybe<Scalars['String']>;
  description_en?: InputMaybe<Scalars['String']>;
  description_nl?: InputMaybe<Scalars['String']>;
  description_tr?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  jobs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  link?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_nl?: InputMaybe<Scalars['String']>;
  name_tr?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

type Query = {
  __typename?: 'Query';
  activities?: Maybe<ActivityEntityResponseCollection>;
  activity?: Maybe<ActivityEntityResponse>;
  announcement?: Maybe<AnnouncementEntityResponse>;
  announcements?: Maybe<AnnouncementEntityResponseCollection>;
  applicant?: Maybe<ApplicantEntityResponse>;
  applicants?: Maybe<ApplicantEntityResponseCollection>;
  application?: Maybe<ApplicationEntityResponse>;
  applications?: Maybe<ApplicationEntityResponseCollection>;
  art?: Maybe<ArtEntityResponse>;
  artist?: Maybe<ArtistEntityResponse>;
  artists?: Maybe<ArtistEntityResponseCollection>;
  arts?: Maybe<ArtEntityResponseCollection>;
  author?: Maybe<AuthorEntityResponse>;
  authors?: Maybe<AuthorEntityResponseCollection>;
  blog?: Maybe<BlogEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  commentsComment?: Maybe<CommentsCommentEntityResponse>;
  commentsCommentReport?: Maybe<CommentsCommentReportEntityResponse>;
  commentsCommentReports?: Maybe<CommentsCommentReportEntityResponseCollection>;
  commentsComments?: Maybe<CommentsCommentEntityResponseCollection>;
  competition?: Maybe<CompetitionEntityResponse>;
  competitions?: Maybe<CompetitionEntityResponseCollection>;
  donate?: Maybe<DonateEntityResponse>;
  donates?: Maybe<DonateEntityResponseCollection>;
  hashtag?: Maybe<HashtagEntityResponse>;
  hashtags?: Maybe<HashtagEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  job?: Maybe<JobEntityResponse>;
  jobs?: Maybe<JobEntityResponseCollection>;
  juri?: Maybe<JuriEntityResponse>;
  juriVote?: Maybe<JuriVoteEntityResponse>;
  juriVotes?: Maybe<JuriVoteEntityResponseCollection>;
  juris?: Maybe<JuriEntityResponseCollection>;
  langRole?: Maybe<LangRoleEntityResponse>;
  langRoles?: Maybe<LangRoleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  mention?: Maybe<MentionEntityResponse>;
  mentions?: Maybe<MentionEntityResponseCollection>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  privacy?: Maybe<PrivacyEntityResponse>;
  project?: Maybe<ProjectEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  term?: Maybe<TermEntityResponse>;
  translator?: Maybe<TranslatorEntityResponse>;
  translators?: Maybe<TranslatorEntityResponseCollection>;
  trend?: Maybe<TrendEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  volunteer?: Maybe<VolunteerEntityResponse>;
  volunteers?: Maybe<VolunteerEntityResponseCollection>;
  vote?: Maybe<VoteEntityResponse>;
  votes?: Maybe<VoteEntityResponseCollection>;
};


type QueryActivitiesArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryActivityArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryAnnouncementArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryAnnouncementsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryApplicantArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryApplicantsArgs = {
  filters?: InputMaybe<ApplicantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryApplicationsArgs = {
  filters?: InputMaybe<ApplicationFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryArtArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryArtistArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryArtistsArgs = {
  filters?: InputMaybe<ArtistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryArtsArgs = {
  filters?: InputMaybe<ArtFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryCommentsCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryCommentsCommentReportArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryCommentsCommentReportsArgs = {
  filters?: InputMaybe<CommentsCommentReportFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryCommentsCommentsArgs = {
  filters?: InputMaybe<CommentsCommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryCompetitionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryCompetitionsArgs = {
  filters?: InputMaybe<CompetitionFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryDonateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryDonatesArgs = {
  filters?: InputMaybe<DonateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryHashtagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryHashtagsArgs = {
  filters?: InputMaybe<HashtagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryJobArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryJuriArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryJuriVoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryJuriVotesArgs = {
  filters?: InputMaybe<JuriVoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryJurisArgs = {
  filters?: InputMaybe<JuriFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryLangRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryLangRolesArgs = {
  filters?: InputMaybe<LangRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryMentionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryMentionsArgs = {
  filters?: InputMaybe<MentionFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryPrivacyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryTermArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


type QueryTranslatorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryTranslatorsArgs = {
  filters?: InputMaybe<TranslatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryVolunteerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryVolunteersArgs = {
  filters?: InputMaybe<VolunteerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type QueryVoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


type QueryVotesArgs = {
  filters?: InputMaybe<VoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

type Tag = {
  __typename?: 'Tag';
  activities?: Maybe<ActivityRelationResponseCollection>;
  announcements?: Maybe<AnnouncementRelationResponseCollection>;
  applications?: Maybe<ApplicationRelationResponseCollection>;
  arts?: Maybe<ArtRelationResponseCollection>;
  blogs?: Maybe<BlogRelationResponseCollection>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name_en?: Maybe<Scalars['String']>;
  name_nl?: Maybe<Scalars['String']>;
  name_tr?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type TagActivitiesArgs = {
  filters?: InputMaybe<ActivityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type TagAnnouncementsArgs = {
  filters?: InputMaybe<AnnouncementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type TagApplicationsArgs = {
  filters?: InputMaybe<ApplicationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type TagArtsArgs = {
  filters?: InputMaybe<ArtFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type TagBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type TagPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
};

type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

type TagFiltersInput = {
  activities?: InputMaybe<ActivityFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  announcements?: InputMaybe<AnnouncementFiltersInput>;
  applications?: InputMaybe<ApplicationFiltersInput>;
  arts?: InputMaybe<ArtFiltersInput>;
  blogs?: InputMaybe<BlogFiltersInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name_en?: InputMaybe<StringFilterInput>;
  name_nl?: InputMaybe<StringFilterInput>;
  name_tr?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type TagInput = {
  activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  announcements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  applications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  arts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  code?: InputMaybe<Scalars['String']>;
  name_en?: InputMaybe<Scalars['String']>;
  name_nl?: InputMaybe<Scalars['String']>;
  name_tr?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

type Term = {
  __typename?: 'Term';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TermRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


type TermLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

type TermEntity = {
  __typename?: 'TermEntity';
  attributes?: Maybe<Term>;
  id?: Maybe<Scalars['ID']>;
};

type TermEntityResponse = {
  __typename?: 'TermEntityResponse';
  data?: Maybe<TermEntity>;
};

type TermInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

type TermRelationResponseCollection = {
  __typename?: 'TermRelationResponseCollection';
  data: Array<TermEntity>;
};

type Translator = {
  __typename?: 'Translator';
  createdAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  roles?: Maybe<LangRoleRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  volunteer?: Maybe<VolunteerEntityResponse>;
};


type TranslatorPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type TranslatorRolesArgs = {
  filters?: InputMaybe<LangRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type TranslatorEntity = {
  __typename?: 'TranslatorEntity';
  attributes?: Maybe<Translator>;
  id?: Maybe<Scalars['ID']>;
};

type TranslatorEntityResponse = {
  __typename?: 'TranslatorEntityResponse';
  data?: Maybe<TranslatorEntity>;
};

type TranslatorEntityResponseCollection = {
  __typename?: 'TranslatorEntityResponseCollection';
  data: Array<TranslatorEntity>;
  meta: ResponseCollectionMeta;
};

type TranslatorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TranslatorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TranslatorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TranslatorFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  roles?: InputMaybe<LangRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  volunteer?: InputMaybe<VolunteerFiltersInput>;
};

type TranslatorInput = {
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  volunteer?: InputMaybe<Scalars['ID']>;
};

type TranslatorRelationResponseCollection = {
  __typename?: 'TranslatorRelationResponseCollection';
  data: Array<TranslatorEntity>;
};

type Trend = {
  __typename?: 'Trend';
  createdAt?: Maybe<Scalars['DateTime']>;
  en?: Maybe<Scalars['JSON']>;
  nl?: Maybe<Scalars['JSON']>;
  tr?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

type TrendEntity = {
  __typename?: 'TrendEntity';
  attributes?: Maybe<Trend>;
  id?: Maybe<Scalars['ID']>;
};

type TrendEntityResponse = {
  __typename?: 'TrendEntityResponse';
  data?: Maybe<TrendEntity>;
};

type TrendInput = {
  en?: InputMaybe<Scalars['JSON']>;
  nl?: InputMaybe<Scalars['JSON']>;
  tr?: InputMaybe<Scalars['JSON']>;
};

type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  applicant?: Maybe<ApplicantEntityResponse>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdPosts?: Maybe<PostRelationResponseCollection>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  volunteer?: Maybe<VolunteerEntityResponse>;
  votes?: Maybe<VoteRelationResponseCollection>;
};


type UsersPermissionsUserCreatedPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


type UsersPermissionsUserVotesArgs = {
  filters?: InputMaybe<VoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  applicant?: InputMaybe<ApplicantFiltersInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  createdPosts?: InputMaybe<PostFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  volunteer?: InputMaybe<VolunteerFiltersInput>;
  votes?: InputMaybe<VoteFiltersInput>;
};

type UsersPermissionsUserInput = {
  applicant?: InputMaybe<Scalars['ID']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdPosts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  volunteer?: InputMaybe<Scalars['ID']>;
  votes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

type Volunteer = {
  __typename?: 'Volunteer';
  approved?: Maybe<Scalars['Boolean']>;
  artist?: Maybe<ArtistEntityResponse>;
  author?: Maybe<AuthorEntityResponse>;
  availableHours: Scalars['Int'];
  avatar?: Maybe<UploadFileEntityResponse>;
  bio?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  country?: Maybe<Enum_Volunteer_Country>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  heardFrom?: Maybe<Scalars['String']>;
  inMailingList?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  jobs?: Maybe<JobRelationResponseCollection>;
  juri?: Maybe<JuriEntityResponse>;
  linkedin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  translator?: Maybe<TranslatorEntityResponse>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  username: Scalars['String'];
};


type VolunteerJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

type VolunteerEntity = {
  __typename?: 'VolunteerEntity';
  attributes?: Maybe<Volunteer>;
  id?: Maybe<Scalars['ID']>;
};

type VolunteerEntityResponse = {
  __typename?: 'VolunteerEntityResponse';
  data?: Maybe<VolunteerEntity>;
};

type VolunteerEntityResponseCollection = {
  __typename?: 'VolunteerEntityResponseCollection';
  data: Array<VolunteerEntity>;
  meta: ResponseCollectionMeta;
};

type VolunteerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VolunteerFiltersInput>>>;
  approved?: InputMaybe<BooleanFilterInput>;
  artist?: InputMaybe<ArtistFiltersInput>;
  author?: InputMaybe<AuthorFiltersInput>;
  availableHours?: InputMaybe<IntFilterInput>;
  bio?: InputMaybe<StringFilterInput>;
  comment?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  facebook?: InputMaybe<StringFilterInput>;
  heardFrom?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inMailingList?: InputMaybe<BooleanFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  isPublic?: InputMaybe<BooleanFilterInput>;
  jobs?: InputMaybe<JobFiltersInput>;
  juri?: InputMaybe<JuriFiltersInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<VolunteerFiltersInput>;
  occupation?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<VolunteerFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  translator?: InputMaybe<TranslatorFiltersInput>;
  twitter?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  username?: InputMaybe<StringFilterInput>;
};

type VolunteerInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  artist?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['ID']>;
  availableHours?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Enum_Volunteer_Country>;
  email?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  heardFrom?: InputMaybe<Scalars['String']>;
  inMailingList?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  jobs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  juri?: InputMaybe<Scalars['ID']>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  translator?: InputMaybe<Scalars['ID']>;
  twitter?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

type Vote = {
  __typename?: 'Vote';
  application?: Maybe<ApplicationEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
  voter?: Maybe<UsersPermissionsUserEntityResponse>;
};

type VoteEntity = {
  __typename?: 'VoteEntity';
  attributes?: Maybe<Vote>;
  id?: Maybe<Scalars['ID']>;
};

type VoteEntityResponse = {
  __typename?: 'VoteEntityResponse';
  data?: Maybe<VoteEntity>;
};

type VoteEntityResponseCollection = {
  __typename?: 'VoteEntityResponseCollection';
  data: Array<VoteEntity>;
  meta: ResponseCollectionMeta;
};

type VoteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VoteFiltersInput>>>;
  application?: InputMaybe<ApplicationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VoteFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<IntFilterInput>;
  voter?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

type VoteInput = {
  application?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Int']>;
  voter?: InputMaybe<Scalars['ID']>;
};

type VoteRelationResponseCollection = {
  __typename?: 'VoteRelationResponseCollection';
  data: Array<VoteEntity>;
};
