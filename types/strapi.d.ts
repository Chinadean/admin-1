declare type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: T[SubKey] }
/** All built-in and custom scalars, mapped to their actual values */

declare type Announcement = {
  __typename?: 'Announcement'
  content: string
  createdAt?: string
  date: string
  date_end?: string
  image: UploadFileEntityResponse
  likes?: number
  locale?: string
  localizations?: AnnouncementRelationResponseCollection
  publishedAt?: string
  slug: string
  title: string
  updatedAt?: string
  views?: number
}

declare type AnnouncementLocalizationsArgs = {
  filters?: AnnouncementFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type AnnouncementEntity = {
  __typename?: 'AnnouncementEntity'
  attributes?: Announcement
  id?: string
}

declare type AnnouncementEntityResponse = {
  __typename?: 'AnnouncementEntityResponse'
  data?: AnnouncementEntity
}

declare type AnnouncementEntityResponseCollection = {
  __typename?: 'AnnouncementEntityResponseCollection'
  data: Array<AnnouncementEntity>
  meta: ResponseCollectionMeta
}

declare type AnnouncementFiltersInput = {
  and?: Array<AnnouncementFiltersInput>
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  date?: DateTimeFilterInput
  date_end?: DateTimeFilterInput
  id?: IdFilterInput
  likes?: IntFilterInput
  locale?: StringFilterInput
  localizations?: AnnouncementFiltersInput
  not?: AnnouncementFiltersInput
  or?: Array<AnnouncementFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  views?: IntFilterInput
}

declare type AnnouncementInput = {
  content?: string
  date?: string
  date_end?: string
  image?: string
  likes?: number
  publishedAt?: string
  slug?: string
  title?: string
  views?: number
}

declare type AnnouncementRelationResponseCollection = {
  __typename?: 'AnnouncementRelationResponseCollection'
  data: Array<AnnouncementEntity>
}

declare type Application = {
  __typename?: 'Application'
  applicant?: UsersPermissionsUserEntityResponse
  competition?: CompetitionEntityResponse
  content: string
  createdAt?: string
  image: UploadFileEntityResponse
  locale?: string
  localizations?: ApplicationRelationResponseCollection
  publishedAt?: string
  slug: string
  title: string
  updatedAt?: string
  votes?: VoteRelationResponseCollection
}

declare type ApplicationLocalizationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type ApplicationVotesArgs = {
  filters?: VoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type ApplicationEntity = {
  __typename?: 'ApplicationEntity'
  attributes?: Application
  id?: string
}

declare type ApplicationEntityResponse = {
  __typename?: 'ApplicationEntityResponse'
  data?: ApplicationEntity
}

declare type ApplicationEntityResponseCollection = {
  __typename?: 'ApplicationEntityResponseCollection'
  data: Array<ApplicationEntity>
  meta: ResponseCollectionMeta
}

declare type ApplicationFiltersInput = {
  and?: Array<ApplicationFiltersInput>
  applicant?: UsersPermissionsUserFiltersInput
  competition?: CompetitionFiltersInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  locale?: StringFilterInput
  localizations?: ApplicationFiltersInput
  not?: ApplicationFiltersInput
  or?: Array<ApplicationFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  votes?: VoteFiltersInput
}

declare type ApplicationInput = {
  applicant?: string
  competition?: string
  content?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
  votes?: Array<string>
}

declare type ApplicationRelationResponseCollection = {
  __typename?: 'ApplicationRelationResponseCollection'
  data: Array<ApplicationEntity>
}

declare type Art = {
  __typename?: 'Art'
  categories: string
  content: string
  createdAt?: string
  images: UploadFileRelationResponseCollection
  likes?: number
  locale?: string
  localizations?: ArtRelationResponseCollection
  owner?: UsersPermissionsUserEntityResponse
  publishedAt?: string
  slug: string
  title: string
  updatedAt?: string
}

declare type ArtImagesArgs = {
  filters?: UploadFileFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type ArtLocalizationsArgs = {
  filters?: ArtFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type ArtEntity = {
  __typename?: 'ArtEntity'
  attributes?: Art
  id?: string
}

declare type ArtEntityResponse = {
  __typename?: 'ArtEntityResponse'
  data?: ArtEntity
}

declare type ArtEntityResponseCollection = {
  __typename?: 'ArtEntityResponseCollection'
  data: Array<ArtEntity>
  meta: ResponseCollectionMeta
}

declare type ArtFiltersInput = {
  and?: Array<ArtFiltersInput>
  categories?: StringFilterInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  likes?: IntFilterInput
  locale?: StringFilterInput
  localizations?: ArtFiltersInput
  not?: ArtFiltersInput
  or?: Array<ArtFiltersInput>
  owner?: UsersPermissionsUserFiltersInput
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
}

declare type ArtInput = {
  categories?: string
  content?: string
  images?: Array<string>
  likes?: number
  owner?: string
  publishedAt?: string
  slug?: string
  title?: string
}

declare type ArtRelationResponseCollection = {
  __typename?: 'ArtRelationResponseCollection'
  data: Array<ArtEntity>
}

declare type Blog = {
  __typename?: 'Blog'
  author?: UsersPermissionsUserEntityResponse
  content: string
  createdAt?: string
  image: UploadFileEntityResponse
  likes?: number
  locale?: string
  localizations?: BlogRelationResponseCollection
  publishedAt?: string
  slug: string
  title: string
  updatedAt?: string
  views?: number
}

declare type BlogLocalizationsArgs = {
  filters?: BlogFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type BlogEntity = {
  __typename?: 'BlogEntity'
  attributes?: Blog
  id?: string
}

declare type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse'
  data?: BlogEntity
}

declare type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection'
  data: Array<BlogEntity>
  meta: ResponseCollectionMeta
}

declare type BlogFiltersInput = {
  and?: Array<BlogFiltersInput>
  author?: UsersPermissionsUserFiltersInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  likes?: IntFilterInput
  locale?: StringFilterInput
  localizations?: BlogFiltersInput
  not?: BlogFiltersInput
  or?: Array<BlogFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  views?: IntFilterInput
}

declare type BlogInput = {
  author?: string
  content?: string
  image?: string
  likes?: number
  publishedAt?: string
  slug?: string
  title?: string
  views?: number
}

declare type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection'
  data: Array<BlogEntity>
}

declare type BooleanFilterInput = {
  and?: Array<boolean>
  between?: Array<boolean>
  contains?: boolean
  containsi?: boolean
  endsWith?: boolean
  eq?: boolean
  gt?: boolean
  gte?: boolean
  in?: Array<boolean>
  lt?: boolean
  lte?: boolean
  ne?: boolean
  not?: BooleanFilterInput
  notContains?: boolean
  notContainsi?: boolean
  notIn?: Array<boolean>
  notNull?: boolean
  null?: boolean
  or?: Array<boolean>
  startsWith?: boolean
}

declare type CommentsComment = {
  __typename?: 'CommentsComment'
  approvalStatus?: string
  authorAvatar?: string
  authorEmail?: string
  authorId?: string
  authorName?: string
  authorUser?: UsersPermissionsUserEntityResponse
  blockReason?: string
  blocked?: boolean
  blockedThread?: boolean
  content: string
  createdAt?: string
  related?: string
  removed?: boolean
  reports?: CommentsCommentReportRelationResponseCollection
  threadOf?: CommentsCommentEntityResponse
  updatedAt?: string
}

declare type CommentsCommentReportsArgs = {
  filters?: CommentsCommentReportFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type CommentsCommentEntity = {
  __typename?: 'CommentsCommentEntity'
  attributes?: CommentsComment
  id?: string
}

declare type CommentsCommentEntityResponse = {
  __typename?: 'CommentsCommentEntityResponse'
  data?: CommentsCommentEntity
}

declare type CommentsCommentEntityResponseCollection = {
  __typename?: 'CommentsCommentEntityResponseCollection'
  data: Array<CommentsCommentEntity>
  meta: ResponseCollectionMeta
}

declare type CommentsCommentFiltersInput = {
  and?: Array<CommentsCommentFiltersInput>
  approvalStatus?: StringFilterInput
  authorAvatar?: StringFilterInput
  authorEmail?: StringFilterInput
  authorId?: StringFilterInput
  authorName?: StringFilterInput
  authorUser?: UsersPermissionsUserFiltersInput
  blockReason?: StringFilterInput
  blocked?: BooleanFilterInput
  blockedThread?: BooleanFilterInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: CommentsCommentFiltersInput
  or?: Array<CommentsCommentFiltersInput>
  related?: StringFilterInput
  removed?: BooleanFilterInput
  reports?: CommentsCommentReportFiltersInput
  threadOf?: CommentsCommentFiltersInput
  updatedAt?: DateTimeFilterInput
}

declare type CommentsCommentInput = {
  approvalStatus?: string
  authorAvatar?: string
  authorEmail?: string
  authorId?: string
  authorName?: string
  authorUser?: string
  blockReason?: string
  blocked?: boolean
  blockedThread?: boolean
  content?: string
  related?: string
  removed?: boolean
  reports?: Array<string>
  threadOf?: string
}

declare type CommentsCommentReport = {
  __typename?: 'CommentsCommentReport'
  content?: string
  createdAt?: string
  reason: Enum_Commentscommentreport_Reason
  related?: CommentsCommentEntityResponse
  resolved?: boolean
  updatedAt?: string
}

declare type CommentsCommentReportEntity = {
  __typename?: 'CommentsCommentReportEntity'
  attributes?: CommentsCommentReport
  id?: string
}

declare type CommentsCommentReportEntityResponse = {
  __typename?: 'CommentsCommentReportEntityResponse'
  data?: CommentsCommentReportEntity
}

declare type CommentsCommentReportEntityResponseCollection = {
  __typename?: 'CommentsCommentReportEntityResponseCollection'
  data: Array<CommentsCommentReportEntity>
  meta: ResponseCollectionMeta
}

declare type CommentsCommentReportFiltersInput = {
  and?: Array<CommentsCommentReportFiltersInput>
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: CommentsCommentReportFiltersInput
  or?: Array<CommentsCommentReportFiltersInput>
  reason?: StringFilterInput
  related?: CommentsCommentFiltersInput
  resolved?: BooleanFilterInput
  updatedAt?: DateTimeFilterInput
}

declare type CommentsCommentReportInput = {
  content?: string
  reason?: Enum_Commentscommentreport_Reason
  related?: string
  resolved?: boolean
}

declare type CommentsCommentReportRelationResponseCollection = {
  __typename?: 'CommentsCommentReportRelationResponseCollection'
  data: Array<CommentsCommentReportEntity>
}

declare type Competition = {
  __typename?: 'Competition'
  applications?: ApplicationRelationResponseCollection
  content: string
  createdAt?: string
  date: string
  date_end?: string
  image: UploadFileEntityResponse
  locale?: string
  localizations?: CompetitionRelationResponseCollection
  publishedAt?: string
  slug: string
  title: string
  updatedAt?: string
}

declare type CompetitionApplicationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type CompetitionLocalizationsArgs = {
  filters?: CompetitionFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type CompetitionEntity = {
  __typename?: 'CompetitionEntity'
  attributes?: Competition
  id?: string
}

declare type CompetitionEntityResponse = {
  __typename?: 'CompetitionEntityResponse'
  data?: CompetitionEntity
}

declare type CompetitionEntityResponseCollection = {
  __typename?: 'CompetitionEntityResponseCollection'
  data: Array<CompetitionEntity>
  meta: ResponseCollectionMeta
}

declare type CompetitionFiltersInput = {
  and?: Array<CompetitionFiltersInput>
  applications?: ApplicationFiltersInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  date?: DateTimeFilterInput
  date_end?: DateTimeFilterInput
  id?: IdFilterInput
  locale?: StringFilterInput
  localizations?: CompetitionFiltersInput
  not?: CompetitionFiltersInput
  or?: Array<CompetitionFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
}

declare type CompetitionInput = {
  applications?: Array<string>
  content?: string
  date?: string
  date_end?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
}

declare type CompetitionRelationResponseCollection = {
  __typename?: 'CompetitionRelationResponseCollection'
  data: Array<CompetitionEntity>
}

declare type DateTimeFilterInput = {
  and?: Array<string>
  between?: Array<string>
  contains?: string
  containsi?: string
  endsWith?: string
  eq?: string
  gt?: string
  gte?: string
  in?: Array<string>
  lt?: string
  lte?: string
  ne?: string
  not?: DateTimeFilterInput
  notContains?: string
  notContainsi?: string
  notIn?: Array<string>
  notNull?: boolean
  null?: boolean
  or?: Array<string>
  startsWith?: string
}

declare enum Enum_Commentscommentreport_Reason {
  BadLanguage = 'BAD_LANGUAGE',
  Discrimination = 'DISCRIMINATION',
  Other = 'OTHER',
}

declare enum Enum_Translationpost_Role {
  EnNl = 'en_nl',
  EnTr = 'en_tr',
  NlEn = 'nl_en',
  NlTr = 'nl_tr',
  TrEn = 'tr_en',
  TrNl = 'tr_nl',
}

declare type FileInfoInput = {
  alternativeText?: string
  caption?: string
  name?: string
}

declare type FloatFilterInput = {
  and?: Array<number>
  between?: Array<number>
  contains?: number
  containsi?: number
  endsWith?: number
  eq?: number
  gt?: number
  gte?: number
  in?: Array<number>
  lt?: number
  lte?: number
  ne?: number
  not?: FloatFilterInput
  notContains?: number
  notContainsi?: number
  notIn?: Array<number>
  notNull?: boolean
  null?: boolean
  or?: Array<number>
  startsWith?: number
}

declare type GenericMorph =
  | Announcement
  | Application
  | Art
  | Blog
  | CommentsComment
  | CommentsCommentReport
  | Competition
  | Hashtag
  | HashtagPost
  | I18NLocale
  | Mention
  | Privacy
  | Term
  | TranslationPost
  | Trend
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Vote

declare type Hashtag = {
  __typename?: 'Hashtag'
  content: string
  createdAt?: string
  date: string
  hashtag: string
  hashtag_extra?: string
  image: UploadFileEntityResponse
  locale?: string
  localizations?: HashtagRelationResponseCollection
  posts?: HashtagPostRelationResponseCollection
  publishedAt?: string
  slug: string
  title: string
  tweets?: any
  updatedAt?: string
}

declare type HashtagLocalizationsArgs = {
  filters?: HashtagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type HashtagPostsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type HashtagEntity = {
  __typename?: 'HashtagEntity'
  attributes?: Hashtag
  id?: string
}

declare type HashtagEntityResponse = {
  __typename?: 'HashtagEntityResponse'
  data?: HashtagEntity
}

declare type HashtagEntityResponseCollection = {
  __typename?: 'HashtagEntityResponseCollection'
  data: Array<HashtagEntity>
  meta: ResponseCollectionMeta
}

declare type HashtagFiltersInput = {
  and?: Array<HashtagFiltersInput>
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  date?: DateTimeFilterInput
  hashtag?: StringFilterInput
  hashtag_extra?: StringFilterInput
  id?: IdFilterInput
  locale?: StringFilterInput
  localizations?: HashtagFiltersInput
  not?: HashtagFiltersInput
  or?: Array<HashtagFiltersInput>
  posts?: HashtagPostFiltersInput
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  title?: StringFilterInput
  tweets?: JsonFilterInput
  updatedAt?: DateTimeFilterInput
}

declare type HashtagInput = {
  content?: string
  date?: string
  hashtag?: string
  hashtag_extra?: string
  image?: string
  posts?: Array<string>
  publishedAt?: string
  slug?: string
  title?: string
  tweets?: any
}

declare type HashtagPost = {
  __typename?: 'HashtagPost'
  createdAt?: string
  hashtag?: HashtagEntityResponse
  image: UploadFileEntityResponse
  locale?: string
  localizations?: HashtagPostRelationResponseCollection
  publishedAt?: string
  slug: string
  text: string
  translations?: TranslationPostRelationResponseCollection
  twitter_image?: string
  updatedAt?: string
}

declare type HashtagPostLocalizationsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type HashtagPostTranslationsArgs = {
  filters?: TranslationPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type HashtagPostEntity = {
  __typename?: 'HashtagPostEntity'
  attributes?: HashtagPost
  id?: string
}

declare type HashtagPostEntityResponse = {
  __typename?: 'HashtagPostEntityResponse'
  data?: HashtagPostEntity
}

declare type HashtagPostEntityResponseCollection = {
  __typename?: 'HashtagPostEntityResponseCollection'
  data: Array<HashtagPostEntity>
  meta: ResponseCollectionMeta
}

declare type HashtagPostFiltersInput = {
  and?: Array<HashtagPostFiltersInput>
  createdAt?: DateTimeFilterInput
  hashtag?: HashtagFiltersInput
  id?: IdFilterInput
  locale?: StringFilterInput
  localizations?: HashtagPostFiltersInput
  not?: HashtagPostFiltersInput
  or?: Array<HashtagPostFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  text?: StringFilterInput
  translations?: TranslationPostFiltersInput
  twitter_image?: StringFilterInput
  updatedAt?: DateTimeFilterInput
}

declare type HashtagPostInput = {
  hashtag?: string
  image?: string
  publishedAt?: string
  slug?: string
  text?: string
  translations?: Array<string>
  twitter_image?: string
}

declare type HashtagPostRelationResponseCollection = {
  __typename?: 'HashtagPostRelationResponseCollection'
  data: Array<HashtagPostEntity>
}

declare type HashtagRelationResponseCollection = {
  __typename?: 'HashtagRelationResponseCollection'
  data: Array<HashtagEntity>
}

declare type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: string
  createdAt?: string
  name?: string
  updatedAt?: string
}

declare type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: I18NLocale
  id?: string
}

declare type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: I18NLocaleEntity
}

declare type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

declare type I18NLocaleFiltersInput = {
  and?: Array<I18NLocaleFiltersInput>
  code?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  name?: StringFilterInput
  not?: I18NLocaleFiltersInput
  or?: Array<I18NLocaleFiltersInput>
  updatedAt?: DateTimeFilterInput
}

declare type IdFilterInput = {
  and?: Array<string>
  between?: Array<string>
  contains?: string
  containsi?: string
  endsWith?: string
  eq?: string
  gt?: string
  gte?: string
  in?: Array<string>
  lt?: string
  lte?: string
  ne?: string
  not?: IdFilterInput
  notContains?: string
  notContainsi?: string
  notIn?: Array<string>
  notNull?: boolean
  null?: boolean
  or?: Array<string>
  startsWith?: string
}

declare type IntFilterInput = {
  and?: Array<number>
  between?: Array<number>
  contains?: number
  containsi?: number
  endsWith?: number
  eq?: number
  gt?: number
  gte?: number
  in?: Array<number>
  lt?: number
  lte?: number
  ne?: number
  not?: IntFilterInput
  notContains?: number
  notContainsi?: number
  notIn?: Array<number>
  notNull?: boolean
  null?: boolean
  or?: Array<number>
  startsWith?: number
}

declare type JsonFilterInput = {
  and?: Array<any>
  between?: Array<any>
  contains?: any
  containsi?: any
  endsWith?: any
  eq?: any
  gt?: any
  gte?: any
  in?: Array<any>
  lt?: any
  lte?: any
  ne?: any
  not?: JsonFilterInput
  notContains?: any
  notContainsi?: any
  notIn?: Array<any>
  notNull?: boolean
  null?: boolean
  or?: Array<any>
  startsWith?: any
}

declare type Mention = {
  __typename?: 'Mention'
  category?: string
  createdAt?: string
  data?: any
  locale?: string
  localizations?: MentionRelationResponseCollection
  publishedAt?: string
  updatedAt?: string
  username: string
}

declare type MentionLocalizationsArgs = {
  filters?: MentionFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type MentionEntity = {
  __typename?: 'MentionEntity'
  attributes?: Mention
  id?: string
}

declare type MentionEntityResponse = {
  __typename?: 'MentionEntityResponse'
  data?: MentionEntity
}

declare type MentionEntityResponseCollection = {
  __typename?: 'MentionEntityResponseCollection'
  data: Array<MentionEntity>
  meta: ResponseCollectionMeta
}

declare type MentionFiltersInput = {
  and?: Array<MentionFiltersInput>
  category?: StringFilterInput
  createdAt?: DateTimeFilterInput
  data?: JsonFilterInput
  id?: IdFilterInput
  locale?: StringFilterInput
  localizations?: MentionFiltersInput
  not?: MentionFiltersInput
  or?: Array<MentionFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  username?: StringFilterInput
}

declare type MentionInput = {
  category?: string
  data?: any
  publishedAt?: string
  username?: string
}

declare type MentionRelationResponseCollection = {
  __typename?: 'MentionRelationResponseCollection'
  data: Array<MentionEntity>
}

declare type Mutation = {
  __typename?: 'Mutation'
  createAnnouncement?: AnnouncementEntityResponse
  createAnnouncementLocalization?: AnnouncementEntityResponse
  createApplication?: ApplicationEntityResponse
  createApplicationLocalization?: ApplicationEntityResponse
  createArt?: ArtEntityResponse
  createArtLocalization?: ArtEntityResponse
  createBlog?: BlogEntityResponse
  createBlogLocalization?: BlogEntityResponse
  createCommentsComment?: CommentsCommentEntityResponse
  createCommentsCommentReport?: CommentsCommentReportEntityResponse
  createCompetition?: CompetitionEntityResponse
  createCompetitionLocalization?: CompetitionEntityResponse
  createHashtag?: HashtagEntityResponse
  createHashtagLocalization?: HashtagEntityResponse
  createHashtagPost?: HashtagPostEntityResponse
  createHashtagPostLocalization?: HashtagPostEntityResponse
  createMention?: MentionEntityResponse
  createMentionLocalization?: MentionEntityResponse
  createPrivacyLocalization?: PrivacyEntityResponse
  createTermLocalization?: TermEntityResponse
  createTranslationPost?: TranslationPostEntityResponse
  createUploadFile?: UploadFileEntityResponse
  /** Create a new role */
  createUsersPermissionsRole?: UsersPermissionsCreateRolePayload
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createVote?: VoteEntityResponse
  deleteAnnouncement?: AnnouncementEntityResponse
  deleteApplication?: ApplicationEntityResponse
  deleteArt?: ArtEntityResponse
  deleteBlog?: BlogEntityResponse
  deleteCommentsComment?: CommentsCommentEntityResponse
  deleteCommentsCommentReport?: CommentsCommentReportEntityResponse
  deleteCompetition?: CompetitionEntityResponse
  deleteHashtag?: HashtagEntityResponse
  deleteHashtagPost?: HashtagPostEntityResponse
  deleteMention?: MentionEntityResponse
  deletePrivacy?: PrivacyEntityResponse
  deleteTerm?: TermEntityResponse
  deleteTranslationPost?: TranslationPostEntityResponse
  deleteTrend?: TrendEntityResponse
  deleteUploadFile?: UploadFileEntityResponse
  /** Delete an existing role */
  deleteUsersPermissionsRole?: UsersPermissionsDeleteRolePayload
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteVote?: VoteEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: UsersPermissionsLoginPayload
  /** Request a reset password token */
  forgotPassword?: UsersPermissionsPasswordPayload
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<UploadFileEntityResponse>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: UploadFileEntityResponse
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: UsersPermissionsLoginPayload
  updateAnnouncement?: AnnouncementEntityResponse
  updateApplication?: ApplicationEntityResponse
  updateArt?: ArtEntityResponse
  updateBlog?: BlogEntityResponse
  updateCommentsComment?: CommentsCommentEntityResponse
  updateCommentsCommentReport?: CommentsCommentReportEntityResponse
  updateCompetition?: CompetitionEntityResponse
  updateFileInfo: UploadFileEntityResponse
  updateHashtag?: HashtagEntityResponse
  updateHashtagPost?: HashtagPostEntityResponse
  updateMention?: MentionEntityResponse
  updatePrivacy?: PrivacyEntityResponse
  updateTerm?: TermEntityResponse
  updateTranslationPost?: TranslationPostEntityResponse
  updateTrend?: TrendEntityResponse
  updateUploadFile?: UploadFileEntityResponse
  /** Update an existing role */
  updateUsersPermissionsRole?: UsersPermissionsUpdateRolePayload
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateVote?: VoteEntityResponse
  upload: UploadFileEntityResponse
}

declare type MutationCreateAnnouncementArgs = {
  data: AnnouncementInput
  locale?: any
}

declare type MutationCreateAnnouncementLocalizationArgs = {
  data?: AnnouncementInput
  id?: string
  locale?: any
}

declare type MutationCreateApplicationArgs = {
  data: ApplicationInput
  locale?: any
}

declare type MutationCreateApplicationLocalizationArgs = {
  data?: ApplicationInput
  id?: string
  locale?: any
}

declare type MutationCreateArtArgs = {
  data: ArtInput
  locale?: any
}

declare type MutationCreateArtLocalizationArgs = {
  data?: ArtInput
  id?: string
  locale?: any
}

declare type MutationCreateBlogArgs = {
  data: BlogInput
  locale?: any
}

declare type MutationCreateBlogLocalizationArgs = {
  data?: BlogInput
  id?: string
  locale?: any
}

declare type MutationCreateCommentsCommentArgs = {
  data: CommentsCommentInput
}

declare type MutationCreateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput
}

declare type MutationCreateCompetitionArgs = {
  data: CompetitionInput
  locale?: any
}

declare type MutationCreateCompetitionLocalizationArgs = {
  data?: CompetitionInput
  id?: string
  locale?: any
}

declare type MutationCreateHashtagArgs = {
  data: HashtagInput
  locale?: any
}

declare type MutationCreateHashtagLocalizationArgs = {
  data?: HashtagInput
  id?: string
  locale?: any
}

declare type MutationCreateHashtagPostArgs = {
  data: HashtagPostInput
  locale?: any
}

declare type MutationCreateHashtagPostLocalizationArgs = {
  data?: HashtagPostInput
  id?: string
  locale?: any
}

declare type MutationCreateMentionArgs = {
  data: MentionInput
  locale?: any
}

declare type MutationCreateMentionLocalizationArgs = {
  data?: MentionInput
  id?: string
  locale?: any
}

declare type MutationCreatePrivacyLocalizationArgs = {
  data?: PrivacyInput
  id?: string
  locale?: any
}

declare type MutationCreateTermLocalizationArgs = {
  data?: TermInput
  id?: string
  locale?: any
}

declare type MutationCreateTranslationPostArgs = {
  data: TranslationPostInput
}

declare type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

declare type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

declare type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

declare type MutationCreateVoteArgs = {
  data: VoteInput
}

declare type MutationDeleteAnnouncementArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteApplicationArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteArtArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteBlogArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteCommentsCommentArgs = {
  id: string
}

declare type MutationDeleteCommentsCommentReportArgs = {
  id: string
}

declare type MutationDeleteCompetitionArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteHashtagArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteHashtagPostArgs = {
  id: string
  locale?: any
}

declare type MutationDeleteMentionArgs = {
  id: string
  locale?: any
}

declare type MutationDeletePrivacyArgs = {
  locale?: any
}

declare type MutationDeleteTermArgs = {
  locale?: any
}

declare type MutationDeleteTranslationPostArgs = {
  id: string
}

declare type MutationDeleteUploadFileArgs = {
  id: string
}

declare type MutationDeleteUsersPermissionsRoleArgs = {
  id: string
}

declare type MutationDeleteUsersPermissionsUserArgs = {
  id: string
}

declare type MutationDeleteVoteArgs = {
  id: string
}

declare type MutationEmailConfirmationArgs = {
  confirmation: string
}

declare type MutationForgotPasswordArgs = {
  email: string
}

declare type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

declare type MutationMultipleUploadArgs = {
  field?: string
  files: Array<any>
  ref?: string
  refId?: string
}

declare type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

declare type MutationRemoveFileArgs = {
  id: string
}

declare type MutationResetPasswordArgs = {
  code: string
  password: string
  passwordConfirmation: string
}

declare type MutationUpdateAnnouncementArgs = {
  data: AnnouncementInput
  id: string
  locale?: any
}

declare type MutationUpdateApplicationArgs = {
  data: ApplicationInput
  id: string
  locale?: any
}

declare type MutationUpdateArtArgs = {
  data: ArtInput
  id: string
  locale?: any
}

declare type MutationUpdateBlogArgs = {
  data: BlogInput
  id: string
  locale?: any
}

declare type MutationUpdateCommentsCommentArgs = {
  data: CommentsCommentInput
  id: string
}

declare type MutationUpdateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput
  id: string
}

declare type MutationUpdateCompetitionArgs = {
  data: CompetitionInput
  id: string
  locale?: any
}

declare type MutationUpdateFileInfoArgs = {
  id: string
  info?: FileInfoInput
}

declare type MutationUpdateHashtagArgs = {
  data: HashtagInput
  id: string
  locale?: any
}

declare type MutationUpdateHashtagPostArgs = {
  data: HashtagPostInput
  id: string
  locale?: any
}

declare type MutationUpdateMentionArgs = {
  data: MentionInput
  id: string
  locale?: any
}

declare type MutationUpdatePrivacyArgs = {
  data: PrivacyInput
  locale?: any
}

declare type MutationUpdateTermArgs = {
  data: TermInput
  locale?: any
}

declare type MutationUpdateTranslationPostArgs = {
  data: TranslationPostInput
  id: string
}

declare type MutationUpdateTrendArgs = {
  data: TrendInput
}

declare type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: string
}

declare type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: string
}

declare type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: string
}

declare type MutationUpdateVoteArgs = {
  data: VoteInput
  id: string
}

declare type MutationUploadArgs = {
  field?: string
  file: any
  info?: FileInfoInput
  ref?: string
  refId?: string
}

declare type Pagination = {
  __typename?: 'Pagination'
  page: number
  pageCount: number
  pageSize: number
  total: number
}

declare type PaginationArg = {
  limit?: number
  page?: number
  pageSize?: number
  start?: number
}

declare type Privacy = {
  __typename?: 'Privacy'
  content: string
  createdAt?: string
  image?: UploadFileEntityResponse
  locale?: string
  localizations?: PrivacyRelationResponseCollection
  publishedAt?: string
  slug?: string
  title?: string
  updatedAt?: string
}

declare type PrivacyLocalizationsArgs = {
  publicationState?: PublicationState
}

declare type PrivacyEntity = {
  __typename?: 'PrivacyEntity'
  attributes?: Privacy
  id?: string
}

declare type PrivacyEntityResponse = {
  __typename?: 'PrivacyEntityResponse'
  data?: PrivacyEntity
}

declare type PrivacyInput = {
  content?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
}

declare type PrivacyRelationResponseCollection = {
  __typename?: 'PrivacyRelationResponseCollection'
  data: Array<PrivacyEntity>
}

declare enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

declare type Query = {
  __typename?: 'Query'
  announcement?: AnnouncementEntityResponse
  announcements?: AnnouncementEntityResponseCollection
  application?: ApplicationEntityResponse
  applications?: ApplicationEntityResponseCollection
  art?: ArtEntityResponse
  arts?: ArtEntityResponseCollection
  blog?: BlogEntityResponse
  blogs?: BlogEntityResponseCollection
  commentsComment?: CommentsCommentEntityResponse
  commentsCommentReport?: CommentsCommentReportEntityResponse
  commentsCommentReports?: CommentsCommentReportEntityResponseCollection
  commentsComments?: CommentsCommentEntityResponseCollection
  competition?: CompetitionEntityResponse
  competitions?: CompetitionEntityResponseCollection
  hashtag?: HashtagEntityResponse
  hashtagPost?: HashtagPostEntityResponse
  hashtagPosts?: HashtagPostEntityResponseCollection
  hashtags?: HashtagEntityResponseCollection
  i18NLocale?: I18NLocaleEntityResponse
  i18NLocales?: I18NLocaleEntityResponseCollection
  me?: UsersPermissionsMe
  mention?: MentionEntityResponse
  mentions?: MentionEntityResponseCollection
  privacy?: PrivacyEntityResponse
  term?: TermEntityResponse
  translationPost?: TranslationPostEntityResponse
  translationPosts?: TranslationPostEntityResponseCollection
  trend?: TrendEntityResponse
  uploadFile?: UploadFileEntityResponse
  uploadFiles?: UploadFileEntityResponseCollection
  usersPermissionsRole?: UsersPermissionsRoleEntityResponse
  usersPermissionsRoles?: UsersPermissionsRoleEntityResponseCollection
  usersPermissionsUser?: UsersPermissionsUserEntityResponse
  usersPermissionsUsers?: UsersPermissionsUserEntityResponseCollection
  vote?: VoteEntityResponse
  votes?: VoteEntityResponseCollection
}

declare type QueryAnnouncementArgs = {
  id?: string
  locale?: any
}

declare type QueryAnnouncementsArgs = {
  filters?: AnnouncementFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryApplicationArgs = {
  id?: string
  locale?: any
}

declare type QueryApplicationsArgs = {
  filters?: ApplicationFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryArtArgs = {
  id?: string
  locale?: any
}

declare type QueryArtsArgs = {
  filters?: ArtFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryBlogArgs = {
  id?: string
  locale?: any
}

declare type QueryBlogsArgs = {
  filters?: BlogFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryCommentsCommentArgs = {
  id?: string
}

declare type QueryCommentsCommentReportArgs = {
  id?: string
}

declare type QueryCommentsCommentReportsArgs = {
  filters?: CommentsCommentReportFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type QueryCommentsCommentsArgs = {
  filters?: CommentsCommentFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type QueryCompetitionArgs = {
  id?: string
  locale?: any
}

declare type QueryCompetitionsArgs = {
  filters?: CompetitionFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryHashtagArgs = {
  id?: string
  locale?: any
}

declare type QueryHashtagPostArgs = {
  id?: string
  locale?: any
}

declare type QueryHashtagPostsArgs = {
  filters?: HashtagPostFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryHashtagsArgs = {
  filters?: HashtagFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryI18NLocaleArgs = {
  id?: string
}

declare type QueryI18NLocalesArgs = {
  filters?: I18NLocaleFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type QueryMentionArgs = {
  id?: string
  locale?: any
}

declare type QueryMentionsArgs = {
  filters?: MentionFiltersInput
  locale?: any
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryPrivacyArgs = {
  locale?: any
  publicationState?: PublicationState
}

declare type QueryTermArgs = {
  locale?: any
  publicationState?: PublicationState
}

declare type QueryTranslationPostArgs = {
  id?: string
}

declare type QueryTranslationPostsArgs = {
  filters?: TranslationPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type QueryUploadFileArgs = {
  id?: string
}

declare type QueryUploadFilesArgs = {
  filters?: UploadFileFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type QueryUsersPermissionsRoleArgs = {
  id?: string
}

declare type QueryUsersPermissionsRolesArgs = {
  filters?: UsersPermissionsRoleFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type QueryUsersPermissionsUserArgs = {
  id?: string
}

declare type QueryUsersPermissionsUsersArgs = {
  filters?: UsersPermissionsUserFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type QueryVoteArgs = {
  id?: string
}

declare type QueryVotesArgs = {
  filters?: VoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

declare type StringFilterInput = {
  and?: Array<string>
  between?: Array<string>
  contains?: string
  containsi?: string
  endsWith?: string
  eq?: string
  gt?: string
  gte?: string
  in?: Array<string>
  lt?: string
  lte?: string
  ne?: string
  not?: StringFilterInput
  notContains?: string
  notContainsi?: string
  notIn?: Array<string>
  notNull?: boolean
  null?: boolean
  or?: Array<string>
  startsWith?: string
}

declare type Term = {
  __typename?: 'Term'
  content: string
  createdAt?: string
  image?: UploadFileEntityResponse
  locale?: string
  localizations?: TermRelationResponseCollection
  publishedAt?: string
  slug?: string
  title?: string
  updatedAt?: string
}

declare type TermLocalizationsArgs = {
  publicationState?: PublicationState
}

declare type TermEntity = {
  __typename?: 'TermEntity'
  attributes?: Term
  id?: string
}

declare type TermEntityResponse = {
  __typename?: 'TermEntityResponse'
  data?: TermEntity
}

declare type TermInput = {
  content?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
}

declare type TermRelationResponseCollection = {
  __typename?: 'TermRelationResponseCollection'
  data: Array<TermEntity>
}

declare type TranslationPost = {
  __typename?: 'TranslationPost'
  createdAt?: string
  has_translated?: boolean
  post?: HashtagPostEntityResponse
  publishedAt?: string
  role: Enum_Translationpost_Role
  translation?: string
  translator?: UsersPermissionsUserEntityResponse
  updatedAt?: string
}

declare type TranslationPostEntity = {
  __typename?: 'TranslationPostEntity'
  attributes?: TranslationPost
  id?: string
}

declare type TranslationPostEntityResponse = {
  __typename?: 'TranslationPostEntityResponse'
  data?: TranslationPostEntity
}

declare type TranslationPostEntityResponseCollection = {
  __typename?: 'TranslationPostEntityResponseCollection'
  data: Array<TranslationPostEntity>
  meta: ResponseCollectionMeta
}

declare type TranslationPostFiltersInput = {
  and?: Array<TranslationPostFiltersInput>
  createdAt?: DateTimeFilterInput
  has_translated?: BooleanFilterInput
  id?: IdFilterInput
  not?: TranslationPostFiltersInput
  or?: Array<TranslationPostFiltersInput>
  post?: HashtagPostFiltersInput
  publishedAt?: DateTimeFilterInput
  role?: StringFilterInput
  translation?: StringFilterInput
  translator?: UsersPermissionsUserFiltersInput
  updatedAt?: DateTimeFilterInput
}

declare type TranslationPostInput = {
  has_translated?: boolean
  post?: string
  publishedAt?: string
  role?: Enum_Translationpost_Role
  translation?: string
  translator?: string
}

declare type TranslationPostRelationResponseCollection = {
  __typename?: 'TranslationPostRelationResponseCollection'
  data: Array<TranslationPostEntity>
}

declare type Trend = {
  __typename?: 'Trend'
  createdAt?: string
  en?: any
  nl?: any
  tr?: any
  updatedAt?: string
}

declare type TrendEntity = {
  __typename?: 'TrendEntity'
  attributes?: Trend
  id?: string
}

declare type TrendEntityResponse = {
  __typename?: 'TrendEntityResponse'
  data?: TrendEntity
}

declare type TrendInput = {
  en?: any
  nl?: any
  tr?: any
}

declare type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: string
  caption?: string
  createdAt?: string
  ext?: string
  formats?: any
  hash: string
  height?: number
  mime: string
  name: string
  previewUrl?: string
  provider: string
  provider_metadata?: any
  related?: Array<GenericMorph>
  size: number
  updatedAt?: string
  url: string
  width?: number
}

declare type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: UploadFile
  id?: string
}

declare type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: UploadFileEntity
}

declare type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

declare type UploadFileFiltersInput = {
  alternativeText?: StringFilterInput
  and?: Array<UploadFileFiltersInput>
  caption?: StringFilterInput
  createdAt?: DateTimeFilterInput
  ext?: StringFilterInput
  formats?: JsonFilterInput
  hash?: StringFilterInput
  height?: IntFilterInput
  id?: IdFilterInput
  mime?: StringFilterInput
  name?: StringFilterInput
  not?: UploadFileFiltersInput
  or?: Array<UploadFileFiltersInput>
  previewUrl?: StringFilterInput
  provider?: StringFilterInput
  provider_metadata?: JsonFilterInput
  size?: FloatFilterInput
  updatedAt?: DateTimeFilterInput
  url?: StringFilterInput
  width?: IntFilterInput
}

declare type UploadFileInput = {
  alternativeText?: string
  caption?: string
  ext?: string
  formats?: any
  hash?: string
  height?: number
  mime?: string
  name?: string
  previewUrl?: string
  provider?: string
  provider_metadata?: any
  size?: number
  url?: string
  width?: number
}

declare type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

declare type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: boolean
}

declare type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: boolean
}

declare type UsersPermissionsLoginInput = {
  identifier: string
  password: string
  provider?: string
}

declare type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: string
  user: UsersPermissionsMe
}

declare type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: boolean
  confirmed?: boolean
  email?: string
  id: string
  role?: UsersPermissionsMeRole
  username: string
}

declare type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: string
  id: string
  name: string
  type?: string
}

declare type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: boolean
}

declare type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: string
  createdAt?: string
  role?: UsersPermissionsRoleEntityResponse
  updatedAt?: string
}

declare type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: UsersPermissionsPermission
  id?: string
}

declare type UsersPermissionsPermissionFiltersInput = {
  action?: StringFilterInput
  and?: Array<UsersPermissionsPermissionFiltersInput>
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: UsersPermissionsPermissionFiltersInput
  or?: Array<UsersPermissionsPermissionFiltersInput>
  role?: UsersPermissionsRoleFiltersInput
  updatedAt?: DateTimeFilterInput
}

declare type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

declare type UsersPermissionsRegisterInput = {
  email: string
  password: string
  username: string
}

declare type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: string
  description?: string
  name: string
  permissions?: UsersPermissionsPermissionRelationResponseCollection
  type?: string
  updatedAt?: string
  users?: UsersPermissionsUserRelationResponseCollection
}

declare type UsersPermissionsRolePermissionsArgs = {
  filters?: UsersPermissionsPermissionFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type UsersPermissionsRoleUsersArgs = {
  filters?: UsersPermissionsUserFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

declare type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: UsersPermissionsRole
  id?: string
}

declare type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: UsersPermissionsRoleEntity
}

declare type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

declare type UsersPermissionsRoleFiltersInput = {
  and?: Array<UsersPermissionsRoleFiltersInput>
  createdAt?: DateTimeFilterInput
  description?: StringFilterInput
  id?: IdFilterInput
  name?: StringFilterInput
  not?: UsersPermissionsRoleFiltersInput
  or?: Array<UsersPermissionsRoleFiltersInput>
  permissions?: UsersPermissionsPermissionFiltersInput
  type?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  users?: UsersPermissionsUserFiltersInput
}

declare type UsersPermissionsRoleInput = {
  description?: string
  name?: string
  permissions?: Array<string>
  type?: string
  users?: Array<string>
}

declare type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: boolean
}

declare type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  applications?: ApplicationRelationResponseCollection
  arts?: ArtRelationResponseCollection
  avatar?: UploadFileEntityResponse
  blocked?: boolean
  blogs?: BlogRelationResponseCollection
  confirmed?: boolean
  createdAt?: string
  email: string
  fullname?: string
  provider?: string
  role?: UsersPermissionsRoleEntityResponse
  translation_posts?: TranslationPostRelationResponseCollection
  updatedAt?: string
  username: string
  votes?: VoteRelationResponseCollection
}

declare type UsersPermissionsUserApplicationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type UsersPermissionsUserArtsArgs = {
  filters?: ArtFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type UsersPermissionsUserBlogsArgs = {
  filters?: BlogFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type UsersPermissionsUserTranslation_PostsArgs = {
  filters?: TranslationPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type UsersPermissionsUserVotesArgs = {
  filters?: VoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

declare type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: UsersPermissionsUser
  id?: string
}

declare type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: UsersPermissionsUserEntity
}

declare type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

declare type UsersPermissionsUserFiltersInput = {
  and?: Array<UsersPermissionsUserFiltersInput>
  applications?: ApplicationFiltersInput
  arts?: ArtFiltersInput
  blocked?: BooleanFilterInput
  blogs?: BlogFiltersInput
  confirmationToken?: StringFilterInput
  confirmed?: BooleanFilterInput
  createdAt?: DateTimeFilterInput
  email?: StringFilterInput
  fullname?: StringFilterInput
  id?: IdFilterInput
  not?: UsersPermissionsUserFiltersInput
  or?: Array<UsersPermissionsUserFiltersInput>
  password?: StringFilterInput
  provider?: StringFilterInput
  resetPasswordToken?: StringFilterInput
  role?: UsersPermissionsRoleFiltersInput
  translation_posts?: TranslationPostFiltersInput
  updatedAt?: DateTimeFilterInput
  username?: StringFilterInput
  votes?: VoteFiltersInput
}

declare type UsersPermissionsUserInput = {
  applications?: Array<string>
  arts?: Array<string>
  avatar?: string
  blocked?: boolean
  blogs?: Array<string>
  confirmationToken?: string
  confirmed?: boolean
  email?: string
  fullname?: string
  password?: string
  provider?: string
  resetPasswordToken?: string
  role?: string
  translation_posts?: Array<string>
  username?: string
  votes?: Array<string>
}

declare type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

declare type Vote = {
  __typename?: 'Vote'
  application?: ApplicationEntityResponse
  createdAt?: string
  publishedAt?: string
  updatedAt?: string
  value: number
  voter?: UsersPermissionsUserEntityResponse
}

declare type VoteEntity = {
  __typename?: 'VoteEntity'
  attributes?: Vote
  id?: string
}

declare type VoteEntityResponse = {
  __typename?: 'VoteEntityResponse'
  data?: VoteEntity
}

declare type VoteEntityResponseCollection = {
  __typename?: 'VoteEntityResponseCollection'
  data: Array<VoteEntity>
  meta: ResponseCollectionMeta
}

declare type VoteFiltersInput = {
  and?: Array<VoteFiltersInput>
  application?: ApplicationFiltersInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: VoteFiltersInput
  or?: Array<VoteFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  value?: IntFilterInput
  voter?: UsersPermissionsUserFiltersInput
}

declare type VoteInput = {
  application?: string
  publishedAt?: string
  value?: number
  voter?: string
}

declare type VoteRelationResponseCollection = {
  __typename?: 'VoteRelationResponseCollection'
  data: Array<VoteEntity>
}
