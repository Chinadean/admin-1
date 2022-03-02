type Announcement = {
  __typename?: 'Announcement'
  categories?: CategoryRelationResponseCollection
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
  tags?: TagRelationResponseCollection
  title: string
  updatedAt?: string
  views?: number
}

type AnnouncementCategoriesArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type AnnouncementLocalizationsArgs = {
  filters?: AnnouncementFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type AnnouncementTagsArgs = {
  filters?: TagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type AnnouncementEntity = {
  __typename?: 'AnnouncementEntity'
  attributes?: Announcement
  id?: string
}

type AnnouncementEntityResponse = {
  __typename?: 'AnnouncementEntityResponse'
  data?: AnnouncementEntity
}

type AnnouncementEntityResponseCollection = {
  __typename?: 'AnnouncementEntityResponseCollection'
  data: Array<AnnouncementEntity>
  meta: ResponseCollectionMeta
}

type AnnouncementFiltersInput = {
  and?: Array<AnnouncementFiltersInput>
  categories?: CategoryFiltersInput
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
  tags?: TagFiltersInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  views?: IntFilterInput
}

type AnnouncementInput = {
  categories?: Array<string>
  content?: string
  date?: string
  date_end?: string
  image?: string
  likes?: number
  publishedAt?: string
  slug?: string
  tags?: Array<string>
  title?: string
  views?: number
}

type AnnouncementRelationResponseCollection = {
  __typename?: 'AnnouncementRelationResponseCollection'
  data: Array<AnnouncementEntity>
}

type Applicant = {
  __typename?: 'Applicant'
  applications?: ApplicationRelationResponseCollection
  createdAt?: string
  profile?: ComponentProfileUser
  publishedAt?: string
  updatedAt?: string
  user?: UsersPermissionsUserEntityResponse
}

type ApplicantApplicationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ApplicantEntity = {
  __typename?: 'ApplicantEntity'
  attributes?: Applicant
  id?: string
}

type ApplicantEntityResponse = {
  __typename?: 'ApplicantEntityResponse'
  data?: ApplicantEntity
}

type ApplicantEntityResponseCollection = {
  __typename?: 'ApplicantEntityResponseCollection'
  data: Array<ApplicantEntity>
  meta: ResponseCollectionMeta
}

type ApplicantFiltersInput = {
  and?: Array<ApplicantFiltersInput>
  applications?: ApplicationFiltersInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: ApplicantFiltersInput
  or?: Array<ApplicantFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  user?: UsersPermissionsUserFiltersInput
}

type ApplicantInput = {
  applications?: Array<string>
  profile?: ComponentProfileUserInput
  publishedAt?: string
  user?: string
}

type Application = {
  __typename?: 'Application'
  applicant?: ApplicantEntityResponse
  competition?: CompetitionEntityResponse
  content: string
  createdAt?: string
  image: UploadFileEntityResponse
  juri_votes?: JuriVoteRelationResponseCollection
  locale?: string
  localizations?: ApplicationRelationResponseCollection
  publishedAt?: string
  slug: string
  tags?: TagRelationResponseCollection
  title: string
  updatedAt?: string
  votes?: VoteRelationResponseCollection
}

type ApplicationJuri_VotesArgs = {
  filters?: JuriVoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ApplicationLocalizationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ApplicationTagsArgs = {
  filters?: TagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ApplicationVotesArgs = {
  filters?: VoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ApplicationEntity = {
  __typename?: 'ApplicationEntity'
  attributes?: Application
  id?: string
}

type ApplicationEntityResponse = {
  __typename?: 'ApplicationEntityResponse'
  data?: ApplicationEntity
}

type ApplicationEntityResponseCollection = {
  __typename?: 'ApplicationEntityResponseCollection'
  data: Array<ApplicationEntity>
  meta: ResponseCollectionMeta
}

type ApplicationFiltersInput = {
  and?: Array<ApplicationFiltersInput>
  applicant?: ApplicantFiltersInput
  competition?: CompetitionFiltersInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  juri_votes?: JuriVoteFiltersInput
  locale?: StringFilterInput
  localizations?: ApplicationFiltersInput
  not?: ApplicationFiltersInput
  or?: Array<ApplicationFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  tags?: TagFiltersInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  votes?: VoteFiltersInput
}

type ApplicationInput = {
  applicant?: string
  competition?: string
  content?: string
  image?: string
  juri_votes?: Array<string>
  publishedAt?: string
  slug?: string
  tags?: Array<string>
  title?: string
  votes?: Array<string>
}

type ApplicationRelationResponseCollection = {
  __typename?: 'ApplicationRelationResponseCollection'
  data: Array<ApplicationEntity>
}

type Art = {
  __typename?: 'Art'
  artist?: ArtistEntityResponse
  categories?: CategoryRelationResponseCollection
  content: string
  createdAt?: string
  images: UploadFileRelationResponseCollection
  likes?: number
  locale?: string
  localizations?: ArtRelationResponseCollection
  publishedAt?: string
  slug: string
  tags?: TagRelationResponseCollection
  title: string
  updatedAt?: string
}

type ArtCategoriesArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ArtImagesArgs = {
  filters?: UploadFileFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type ArtLocalizationsArgs = {
  filters?: ArtFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ArtTagsArgs = {
  filters?: TagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ArtEntity = {
  __typename?: 'ArtEntity'
  attributes?: Art
  id?: string
}

type ArtEntityResponse = {
  __typename?: 'ArtEntityResponse'
  data?: ArtEntity
}

type ArtEntityResponseCollection = {
  __typename?: 'ArtEntityResponseCollection'
  data: Array<ArtEntity>
  meta: ResponseCollectionMeta
}

type ArtFiltersInput = {
  and?: Array<ArtFiltersInput>
  artist?: ArtistFiltersInput
  categories?: CategoryFiltersInput
  content?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  likes?: IntFilterInput
  locale?: StringFilterInput
  localizations?: ArtFiltersInput
  not?: ArtFiltersInput
  or?: Array<ArtFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  tags?: TagFiltersInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
}

type ArtInput = {
  artist?: string
  categories?: Array<string>
  content?: string
  images?: Array<string>
  likes?: number
  publishedAt?: string
  slug?: string
  tags?: Array<string>
  title?: string
}

type ArtRelationResponseCollection = {
  __typename?: 'ArtRelationResponseCollection'
  data: Array<ArtEntity>
}

type Artist = {
  __typename?: 'Artist'
  arts?: ArtRelationResponseCollection
  createdAt?: string
  profile: ComponentProfileUser
  publishedAt?: string
  updatedAt?: string
  user?: UsersPermissionsUserEntityResponse
}

type ArtistArtsArgs = {
  filters?: ArtFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ArtistEntity = {
  __typename?: 'ArtistEntity'
  attributes?: Artist
  id?: string
}

type ArtistEntityResponse = {
  __typename?: 'ArtistEntityResponse'
  data?: ArtistEntity
}

type ArtistEntityResponseCollection = {
  __typename?: 'ArtistEntityResponseCollection'
  data: Array<ArtistEntity>
  meta: ResponseCollectionMeta
}

type ArtistFiltersInput = {
  and?: Array<ArtistFiltersInput>
  arts?: ArtFiltersInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: ArtistFiltersInput
  or?: Array<ArtistFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  user?: UsersPermissionsUserFiltersInput
}

type ArtistInput = {
  arts?: Array<string>
  profile?: ComponentProfileUserInput
  publishedAt?: string
  user?: string
}

type Author = {
  __typename?: 'Author'
  blogs?: BlogRelationResponseCollection
  createdAt?: string
  profile: ComponentProfileUser
  publishedAt?: string
  updatedAt?: string
  user?: UsersPermissionsUserEntityResponse
}

type AuthorBlogsArgs = {
  filters?: BlogFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type AuthorEntity = {
  __typename?: 'AuthorEntity'
  attributes?: Author
  id?: string
}

type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse'
  data?: AuthorEntity
}

type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection'
  data: Array<AuthorEntity>
  meta: ResponseCollectionMeta
}

type AuthorFiltersInput = {
  and?: Array<AuthorFiltersInput>
  blogs?: BlogFiltersInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: AuthorFiltersInput
  or?: Array<AuthorFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  user?: UsersPermissionsUserFiltersInput
}

type AuthorInput = {
  blogs?: Array<string>
  profile?: ComponentProfileUserInput
  publishedAt?: string
  user?: string
}

type Blog = {
  __typename?: 'Blog'
  author?: AuthorEntityResponse
  categories?: CategoryRelationResponseCollection
  content: string
  createdAt?: string
  image: UploadFileEntityResponse
  likes?: number
  locale?: string
  localizations?: BlogRelationResponseCollection
  publishedAt?: string
  slug: string
  tags?: TagRelationResponseCollection
  title: string
  updatedAt?: string
  views?: number
}

type BlogCategoriesArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type BlogLocalizationsArgs = {
  filters?: BlogFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type BlogTagsArgs = {
  filters?: TagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type BlogEntity = {
  __typename?: 'BlogEntity'
  attributes?: Blog
  id?: string
}

type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse'
  data?: BlogEntity
}

type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection'
  data: Array<BlogEntity>
  meta: ResponseCollectionMeta
}

type BlogFiltersInput = {
  and?: Array<BlogFiltersInput>
  author?: AuthorFiltersInput
  categories?: CategoryFiltersInput
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
  tags?: TagFiltersInput
  title?: StringFilterInput
  updatedAt?: DateTimeFilterInput
  views?: IntFilterInput
}

type BlogInput = {
  author?: string
  categories?: Array<string>
  content?: string
  image?: string
  likes?: number
  publishedAt?: string
  slug?: string
  tags?: Array<string>
  title?: string
  views?: number
}

type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection'
  data: Array<BlogEntity>
}

type BooleanFilterInput = {
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

type Category = {
  __typename?: 'Category'
  announcements?: AnnouncementRelationResponseCollection
  arts?: ArtRelationResponseCollection
  blogs?: BlogRelationResponseCollection
  code?: string
  competitions?: CompetitionRelationResponseCollection
  createdAt?: string
  hashtags?: HashtagRelationResponseCollection
  label?: string
  locale?: string
  localizations?: CategoryRelationResponseCollection
  mentions?: MentionRelationResponseCollection
  publishedAt?: string
  updatedAt?: string
}

type CategoryAnnouncementsArgs = {
  filters?: AnnouncementFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryArtsArgs = {
  filters?: ArtFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryBlogsArgs = {
  filters?: BlogFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryCompetitionsArgs = {
  filters?: CompetitionFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryHashtagsArgs = {
  filters?: HashtagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryLocalizationsArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryMentionsArgs = {
  filters?: MentionFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CategoryEntity = {
  __typename?: 'CategoryEntity'
  attributes?: Category
  id?: string
}

type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse'
  data?: CategoryEntity
}

type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection'
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

type CategoryFiltersInput = {
  and?: Array<CategoryFiltersInput>
  announcements?: AnnouncementFiltersInput
  arts?: ArtFiltersInput
  blogs?: BlogFiltersInput
  code?: StringFilterInput
  competitions?: CompetitionFiltersInput
  createdAt?: DateTimeFilterInput
  hashtags?: HashtagFiltersInput
  id?: IdFilterInput
  label?: StringFilterInput
  locale?: StringFilterInput
  localizations?: CategoryFiltersInput
  mentions?: MentionFiltersInput
  not?: CategoryFiltersInput
  or?: Array<CategoryFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
}

type CategoryInput = {
  announcements?: Array<string>
  arts?: Array<string>
  blogs?: Array<string>
  code?: string
  competitions?: Array<string>
  hashtags?: Array<string>
  label?: string
  mentions?: Array<string>
  publishedAt?: string
}

type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection'
  data: Array<CategoryEntity>
}

type CommentsComment = {
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

type CommentsCommentReportsArgs = {
  filters?: CommentsCommentReportFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type CommentsCommentEntity = {
  __typename?: 'CommentsCommentEntity'
  attributes?: CommentsComment
  id?: string
}

type CommentsCommentEntityResponse = {
  __typename?: 'CommentsCommentEntityResponse'
  data?: CommentsCommentEntity
}

type CommentsCommentEntityResponseCollection = {
  __typename?: 'CommentsCommentEntityResponseCollection'
  data: Array<CommentsCommentEntity>
  meta: ResponseCollectionMeta
}

type CommentsCommentFiltersInput = {
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

type CommentsCommentInput = {
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

type CommentsCommentReport = {
  __typename?: 'CommentsCommentReport'
  content?: string
  createdAt?: string
  reason: Enum_Commentscommentreport_Reason
  related?: CommentsCommentEntityResponse
  resolved?: boolean
  updatedAt?: string
}

type CommentsCommentReportEntity = {
  __typename?: 'CommentsCommentReportEntity'
  attributes?: CommentsCommentReport
  id?: string
}

type CommentsCommentReportEntityResponse = {
  __typename?: 'CommentsCommentReportEntityResponse'
  data?: CommentsCommentReportEntity
}

type CommentsCommentReportEntityResponseCollection = {
  __typename?: 'CommentsCommentReportEntityResponseCollection'
  data: Array<CommentsCommentReportEntity>
  meta: ResponseCollectionMeta
}

type CommentsCommentReportFiltersInput = {
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

type CommentsCommentReportInput = {
  content?: string
  reason?: Enum_Commentscommentreport_Reason
  related?: string
  resolved?: boolean
}

type CommentsCommentReportRelationResponseCollection = {
  __typename?: 'CommentsCommentReportRelationResponseCollection'
  data: Array<CommentsCommentReportEntity>
}

type Competition = {
  __typename?: 'Competition'
  applications?: ApplicationRelationResponseCollection
  categories?: CategoryRelationResponseCollection
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

type CompetitionApplicationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CompetitionCategoriesArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CompetitionLocalizationsArgs = {
  filters?: CompetitionFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type CompetitionEntity = {
  __typename?: 'CompetitionEntity'
  attributes?: Competition
  id?: string
}

type CompetitionEntityResponse = {
  __typename?: 'CompetitionEntityResponse'
  data?: CompetitionEntity
}

type CompetitionEntityResponseCollection = {
  __typename?: 'CompetitionEntityResponseCollection'
  data: Array<CompetitionEntity>
  meta: ResponseCollectionMeta
}

type CompetitionFiltersInput = {
  and?: Array<CompetitionFiltersInput>
  applications?: ApplicationFiltersInput
  categories?: CategoryFiltersInput
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

type CompetitionInput = {
  applications?: Array<string>
  categories?: Array<string>
  content?: string
  date?: string
  date_end?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
}

type CompetitionRelationResponseCollection = {
  __typename?: 'CompetitionRelationResponseCollection'
  data: Array<CompetitionEntity>
}

type ComponentProfileUser = {
  __typename?: 'ComponentProfileUser'
  approved?: boolean
  bio?: string
  facebook?: string
  id: string
  inMailingList?: boolean
  instagram?: string
  linkedin?: string
  name: string
  twitter?: string
}

type ComponentProfileUserInput = {
  approved?: boolean
  bio?: string
  facebook?: string
  id?: string
  inMailingList?: boolean
  instagram?: string
  linkedin?: string
  name?: string
  twitter?: string
}

type DateTimeFilterInput = {
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

declare enum Enum_Volunteer_Country {
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
  Zw = 'ZW',
}

type FileInfoInput = {
  alternativeText?: string
  caption?: string
  name?: string
}

type FloatFilterInput = {
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

type GenericMorph =
  | Announcement
  | Applicant
  | Application
  | Art
  | Artist
  | Author
  | Blog
  | Category
  | CommentsComment
  | CommentsCommentReport
  | Competition
  | ComponentProfileUser
  | Hashtag
  | HashtagPost
  | I18NLocale
  | Juri
  | JuriVote
  | Mention
  | Privacy
  | Tag
  | Term
  | Translator
  | Trend
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Volunteer
  | Vote

type Hashtag = {
  __typename?: 'Hashtag'
  categories?: CategoryRelationResponseCollection
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
  tweets?: TimelineTweet[]
  updatedAt?: string
}

type HashtagCategoriesArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type HashtagLocalizationsArgs = {
  filters?: HashtagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type HashtagPostsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type HashtagEntity = {
  __typename?: 'HashtagEntity'
  attributes?: Hashtag
  id?: string
}

type HashtagEntityResponse = {
  __typename?: 'HashtagEntityResponse'
  data?: HashtagEntity
}

type HashtagEntityResponseCollection = {
  __typename?: 'HashtagEntityResponseCollection'
  data: Array<HashtagEntity>
  meta: ResponseCollectionMeta
}

type HashtagFiltersInput = {
  and?: Array<HashtagFiltersInput>
  categories?: CategoryFiltersInput
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

type HashtagInput = {
  categories?: Array<string>
  content?: string
  date?: string
  hashtag?: string
  hashtag_extra?: string
  image?: string
  posts?: Array<string>
  publishedAt?: string
  slug?: string
  title?: string
  tweets?: TimelineTweet[]
}

type HashtagPost = {
  __typename?: 'HashtagPost'
  createdAt?: string
  creator?: UsersPermissionsUserEntityResponse
  hashtag?: HashtagEntityResponse
  image?: UploadFileEntityResponse
  locale?: string
  localizations?: HashtagPostRelationResponseCollection
  publishedAt?: string
  slug: string
  tags?: TagRelationResponseCollection
  text: string
  translator?: TranslatorEntityResponse
  twitter_image?: string
  updatedAt?: string
}

type HashtagPostLocalizationsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type HashtagPostTagsArgs = {
  filters?: TagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type HashtagPostEntity = {
  __typename?: 'HashtagPostEntity'
  attributes?: HashtagPost
  id?: string
}

type HashtagPostEntityResponse = {
  __typename?: 'HashtagPostEntityResponse'
  data?: HashtagPostEntity
}

type HashtagPostEntityResponseCollection = {
  __typename?: 'HashtagPostEntityResponseCollection'
  data: Array<HashtagPostEntity>
  meta: ResponseCollectionMeta
}

type HashtagPostFiltersInput = {
  and?: Array<HashtagPostFiltersInput>
  createdAt?: DateTimeFilterInput
  creator?: UsersPermissionsUserFiltersInput
  hashtag?: HashtagFiltersInput
  id?: IdFilterInput
  locale?: StringFilterInput
  localizations?: HashtagPostFiltersInput
  not?: HashtagPostFiltersInput
  or?: Array<HashtagPostFiltersInput>
  publishedAt?: DateTimeFilterInput
  slug?: StringFilterInput
  tags?: TagFiltersInput
  text?: StringFilterInput
  translator?: TranslatorFiltersInput
  twitter_image?: StringFilterInput
  updatedAt?: DateTimeFilterInput
}

type HashtagPostInput = {
  creator?: string
  hashtag?: string
  image?: string
  publishedAt?: string
  slug?: string
  tags?: Array<string>
  text?: string
  translator?: string
  twitter_image?: string
}

type HashtagPostRelationResponseCollection = {
  __typename?: 'HashtagPostRelationResponseCollection'
  data: Array<HashtagPostEntity>
}

type HashtagRelationResponseCollection = {
  __typename?: 'HashtagRelationResponseCollection'
  data: Array<HashtagEntity>
}

type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: string
  createdAt?: string
  name?: string
  updatedAt?: string
}

type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: I18NLocale
  id?: string
}

type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: I18NLocaleEntity
}

type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

type I18NLocaleFiltersInput = {
  and?: Array<I18NLocaleFiltersInput>
  code?: StringFilterInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  name?: StringFilterInput
  not?: I18NLocaleFiltersInput
  or?: Array<I18NLocaleFiltersInput>
  updatedAt?: DateTimeFilterInput
}

type IdFilterInput = {
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

type IntFilterInput = {
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

type JsonFilterInput = {
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

type Juri = {
  __typename?: 'Juri'
  createdAt?: string
  profile: ComponentProfileUser
  publishedAt?: string
  updatedAt?: string
  user?: UsersPermissionsUserEntityResponse
  votes?: JuriVoteRelationResponseCollection
}

type JuriVotesArgs = {
  filters?: JuriVoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type JuriEntity = {
  __typename?: 'JuriEntity'
  attributes?: Juri
  id?: string
}

type JuriEntityResponse = {
  __typename?: 'JuriEntityResponse'
  data?: JuriEntity
}

type JuriEntityResponseCollection = {
  __typename?: 'JuriEntityResponseCollection'
  data: Array<JuriEntity>
  meta: ResponseCollectionMeta
}

type JuriFiltersInput = {
  and?: Array<JuriFiltersInput>
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: JuriFiltersInput
  or?: Array<JuriFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  user?: UsersPermissionsUserFiltersInput
  votes?: JuriVoteFiltersInput
}

type JuriInput = {
  profile?: ComponentProfileUserInput
  publishedAt?: string
  user?: string
  votes?: Array<string>
}

type JuriVote = {
  __typename?: 'JuriVote'
  application?: ApplicationEntityResponse
  createdAt?: string
  juri?: JuriEntityResponse
  publishedAt?: string
  updatedAt?: string
  value: number
}

type JuriVoteEntity = {
  __typename?: 'JuriVoteEntity'
  attributes?: JuriVote
  id?: string
}

type JuriVoteEntityResponse = {
  __typename?: 'JuriVoteEntityResponse'
  data?: JuriVoteEntity
}

type JuriVoteEntityResponseCollection = {
  __typename?: 'JuriVoteEntityResponseCollection'
  data: Array<JuriVoteEntity>
  meta: ResponseCollectionMeta
}

type JuriVoteFiltersInput = {
  and?: Array<JuriVoteFiltersInput>
  application?: ApplicationFiltersInput
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  juri?: JuriFiltersInput
  not?: JuriVoteFiltersInput
  or?: Array<JuriVoteFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  value?: IntFilterInput
}

type JuriVoteInput = {
  application?: string
  juri?: string
  publishedAt?: string
  value?: number
}

type JuriVoteRelationResponseCollection = {
  __typename?: 'JuriVoteRelationResponseCollection'
  data: Array<JuriVoteEntity>
}

type Mention = {
  __typename?: 'Mention'
  categories?: CategoryRelationResponseCollection
  createdAt?: string
  data?: any
  locale?: string
  localizations?: MentionRelationResponseCollection
  publishedAt?: string
  updatedAt?: string
  username: string
}

type MentionCategoriesArgs = {
  filters?: CategoryFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type MentionLocalizationsArgs = {
  filters?: MentionFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type MentionEntity = {
  __typename?: 'MentionEntity'
  attributes?: Mention
  id?: string
}

type MentionEntityResponse = {
  __typename?: 'MentionEntityResponse'
  data?: MentionEntity
}

type MentionEntityResponseCollection = {
  __typename?: 'MentionEntityResponseCollection'
  data: Array<MentionEntity>
  meta: ResponseCollectionMeta
}

type MentionFiltersInput = {
  and?: Array<MentionFiltersInput>
  categories?: CategoryFiltersInput
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

type MentionInput = {
  categories?: Array<string>
  data?: any
  publishedAt?: string
  username?: string
}

type MentionRelationResponseCollection = {
  __typename?: 'MentionRelationResponseCollection'
  data: Array<MentionEntity>
}

type Mutation = {
  __typename?: 'Mutation'
  createAnnouncement?: AnnouncementEntityResponse
  createAnnouncementLocalization?: AnnouncementEntityResponse
  createApplicant?: ApplicantEntityResponse
  createApplication?: ApplicationEntityResponse
  createApplicationLocalization?: ApplicationEntityResponse
  createArt?: ArtEntityResponse
  createArtLocalization?: ArtEntityResponse
  createArtist?: ArtistEntityResponse
  createAuthor?: AuthorEntityResponse
  createBlog?: BlogEntityResponse
  createBlogLocalization?: BlogEntityResponse
  createCategory?: CategoryEntityResponse
  createCategoryLocalization?: CategoryEntityResponse
  createCommentsComment?: CommentsCommentEntityResponse
  createCommentsCommentReport?: CommentsCommentReportEntityResponse
  createCompetition?: CompetitionEntityResponse
  createCompetitionLocalization?: CompetitionEntityResponse
  createHashtag?: HashtagEntityResponse
  createHashtagLocalization?: HashtagEntityResponse
  createHashtagPost?: HashtagPostEntityResponse
  createHashtagPostLocalization?: HashtagPostEntityResponse
  createJuri?: JuriEntityResponse
  createJuriVote?: JuriVoteEntityResponse
  createMention?: MentionEntityResponse
  createMentionLocalization?: MentionEntityResponse
  createPrivacyLocalization?: PrivacyEntityResponse
  createTag?: TagEntityResponse
  createTagLocalization?: TagEntityResponse
  createTermLocalization?: TermEntityResponse
  createTranslator?: TranslatorEntityResponse
  createUploadFile?: UploadFileEntityResponse
  /** Create a new role */
  createUsersPermissionsRole?: UsersPermissionsCreateRolePayload
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createVolunteer?: VolunteerEntityResponse
  createVote?: VoteEntityResponse
  deleteAnnouncement?: AnnouncementEntityResponse
  deleteApplicant?: ApplicantEntityResponse
  deleteApplication?: ApplicationEntityResponse
  deleteArt?: ArtEntityResponse
  deleteArtist?: ArtistEntityResponse
  deleteAuthor?: AuthorEntityResponse
  deleteBlog?: BlogEntityResponse
  deleteCategory?: CategoryEntityResponse
  deleteCommentsComment?: CommentsCommentEntityResponse
  deleteCommentsCommentReport?: CommentsCommentReportEntityResponse
  deleteCompetition?: CompetitionEntityResponse
  deleteHashtag?: HashtagEntityResponse
  deleteHashtagPost?: HashtagPostEntityResponse
  deleteJuri?: JuriEntityResponse
  deleteJuriVote?: JuriVoteEntityResponse
  deleteMention?: MentionEntityResponse
  deletePrivacy?: PrivacyEntityResponse
  deleteTag?: TagEntityResponse
  deleteTerm?: TermEntityResponse
  deleteTranslator?: TranslatorEntityResponse
  deleteTrend?: TrendEntityResponse
  deleteUploadFile?: UploadFileEntityResponse
  /** Delete an existing role */
  deleteUsersPermissionsRole?: UsersPermissionsDeleteRolePayload
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteVolunteer?: VolunteerEntityResponse
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
  updateApplicant?: ApplicantEntityResponse
  updateApplication?: ApplicationEntityResponse
  updateArt?: ArtEntityResponse
  updateArtist?: ArtistEntityResponse
  updateAuthor?: AuthorEntityResponse
  updateBlog?: BlogEntityResponse
  updateCategory?: CategoryEntityResponse
  updateCommentsComment?: CommentsCommentEntityResponse
  updateCommentsCommentReport?: CommentsCommentReportEntityResponse
  updateCompetition?: CompetitionEntityResponse
  updateFileInfo: UploadFileEntityResponse
  updateHashtag?: HashtagEntityResponse
  updateHashtagPost?: HashtagPostEntityResponse
  updateJuri?: JuriEntityResponse
  updateJuriVote?: JuriVoteEntityResponse
  updateMention?: MentionEntityResponse
  updatePrivacy?: PrivacyEntityResponse
  updateTag?: TagEntityResponse
  updateTerm?: TermEntityResponse
  updateTranslator?: TranslatorEntityResponse
  updateTrend?: TrendEntityResponse
  updateUploadFile?: UploadFileEntityResponse
  /** Update an existing role */
  updateUsersPermissionsRole?: UsersPermissionsUpdateRolePayload
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateVolunteer?: VolunteerEntityResponse
  updateVote?: VoteEntityResponse
  upload: UploadFileEntityResponse
}

type MutationCreateAnnouncementArgs = {
  data: AnnouncementInput
  locale?: I18NLocaleCode
}

type MutationCreateAnnouncementLocalizationArgs = {
  data?: AnnouncementInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateApplicantArgs = {
  data: ApplicantInput
}

type MutationCreateApplicationArgs = {
  data: ApplicationInput
  locale?: I18NLocaleCode
}

type MutationCreateApplicationLocalizationArgs = {
  data?: ApplicationInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateArtArgs = {
  data: ArtInput
  locale?: I18NLocaleCode
}

type MutationCreateArtLocalizationArgs = {
  data?: ArtInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateArtistArgs = {
  data: ArtistInput
}

type MutationCreateAuthorArgs = {
  data: AuthorInput
}

type MutationCreateBlogArgs = {
  data: BlogInput
  locale?: I18NLocaleCode
}

type MutationCreateBlogLocalizationArgs = {
  data?: BlogInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateCategoryArgs = {
  data: CategoryInput
  locale?: I18NLocaleCode
}

type MutationCreateCategoryLocalizationArgs = {
  data?: CategoryInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateCommentsCommentArgs = {
  data: CommentsCommentInput
}

type MutationCreateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput
}

type MutationCreateCompetitionArgs = {
  data: CompetitionInput
  locale?: I18NLocaleCode
}

type MutationCreateCompetitionLocalizationArgs = {
  data?: CompetitionInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateHashtagArgs = {
  data: HashtagInput
  locale?: I18NLocaleCode
}

type MutationCreateHashtagLocalizationArgs = {
  data?: HashtagInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateHashtagPostArgs = {
  data: HashtagPostInput
  locale?: I18NLocaleCode
}

type MutationCreateHashtagPostLocalizationArgs = {
  data?: HashtagPostInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateJuriArgs = {
  data: JuriInput
}

type MutationCreateJuriVoteArgs = {
  data: JuriVoteInput
}

type MutationCreateMentionArgs = {
  data: MentionInput
  locale?: I18NLocaleCode
}

type MutationCreateMentionLocalizationArgs = {
  data?: MentionInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreatePrivacyLocalizationArgs = {
  data?: PrivacyInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateTagArgs = {
  data: TagInput
  locale?: I18NLocaleCode
}

type MutationCreateTagLocalizationArgs = {
  data?: TagInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateTermLocalizationArgs = {
  data?: TermInput
  id?: string
  locale?: I18NLocaleCode
}

type MutationCreateTranslatorArgs = {
  data: TranslatorInput
}

type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

type MutationCreateVolunteerArgs = {
  data: VolunteerInput
}

type MutationCreateVoteArgs = {
  data: VoteInput
}

type MutationDeleteAnnouncementArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteApplicantArgs = {
  id: string
}

type MutationDeleteApplicationArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteArtArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteArtistArgs = {
  id: string
}

type MutationDeleteAuthorArgs = {
  id: string
}

type MutationDeleteBlogArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteCategoryArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteCommentsCommentArgs = {
  id: string
}

type MutationDeleteCommentsCommentReportArgs = {
  id: string
}

type MutationDeleteCompetitionArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteHashtagArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteHashtagPostArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteJuriArgs = {
  id: string
}

type MutationDeleteJuriVoteArgs = {
  id: string
}

type MutationDeleteMentionArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeletePrivacyArgs = {
  locale?: I18NLocaleCode
}

type MutationDeleteTagArgs = {
  id: string
  locale?: I18NLocaleCode
}

type MutationDeleteTermArgs = {
  locale?: I18NLocaleCode
}

type MutationDeleteTranslatorArgs = {
  id: string
}

type MutationDeleteUploadFileArgs = {
  id: string
}

type MutationDeleteUsersPermissionsRoleArgs = {
  id: string
}

type MutationDeleteUsersPermissionsUserArgs = {
  id: string
}

type MutationDeleteVolunteerArgs = {
  id: string
}

type MutationDeleteVoteArgs = {
  id: string
}

type MutationEmailConfirmationArgs = {
  confirmation: string
}

type MutationForgotPasswordArgs = {
  email: string
}

type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

type MutationMultipleUploadArgs = {
  field?: string
  files: Array<any>
  ref?: string
  refId?: string
}

type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

type MutationRemoveFileArgs = {
  id: string
}

type MutationResetPasswordArgs = {
  code: string
  password: string
  passwordConfirmation: string
}

type MutationUpdateAnnouncementArgs = {
  data: AnnouncementInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateApplicantArgs = {
  data: ApplicantInput
  id: string
}

type MutationUpdateApplicationArgs = {
  data: ApplicationInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateArtArgs = {
  data: ArtInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateArtistArgs = {
  data: ArtistInput
  id: string
}

type MutationUpdateAuthorArgs = {
  data: AuthorInput
  id: string
}

type MutationUpdateBlogArgs = {
  data: BlogInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateCategoryArgs = {
  data: CategoryInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateCommentsCommentArgs = {
  data: CommentsCommentInput
  id: string
}

type MutationUpdateCommentsCommentReportArgs = {
  data: CommentsCommentReportInput
  id: string
}

type MutationUpdateCompetitionArgs = {
  data: CompetitionInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateFileInfoArgs = {
  id: string
  info?: FileInfoInput
}

type MutationUpdateHashtagArgs = {
  data: HashtagInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateHashtagPostArgs = {
  data: HashtagPostInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateJuriArgs = {
  data: JuriInput
  id: string
}

type MutationUpdateJuriVoteArgs = {
  data: JuriVoteInput
  id: string
}

type MutationUpdateMentionArgs = {
  data: MentionInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdatePrivacyArgs = {
  data: PrivacyInput
  locale?: I18NLocaleCode
}

type MutationUpdateTagArgs = {
  data: TagInput
  id: string
  locale?: I18NLocaleCode
}

type MutationUpdateTermArgs = {
  data: TermInput
  locale?: I18NLocaleCode
}

type MutationUpdateTranslatorArgs = {
  data: TranslatorInput
  id: string
}

type MutationUpdateTrendArgs = {
  data: TrendInput
}

type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: string
}

type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: string
}

type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: string
}

type MutationUpdateVolunteerArgs = {
  data: VolunteerInput
  id: string
}

type MutationUpdateVoteArgs = {
  data: VoteInput
  id: string
}

type MutationUploadArgs = {
  field?: string
  file: any
  info?: FileInfoInput
  ref?: string
  refId?: string
}

type Pagination = {
  __typename?: 'Pagination'
  page: number
  pageCount: number
  pageSize: number
  total: number
}

type PaginationArg = {
  limit?: number
  page?: number
  pageSize?: number
  start?: number
}

type Privacy = {
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

type PrivacyLocalizationsArgs = {
  publicationState?: PublicationState
}

type PrivacyEntity = {
  __typename?: 'PrivacyEntity'
  attributes?: Privacy
  id?: string
}

type PrivacyEntityResponse = {
  __typename?: 'PrivacyEntityResponse'
  data?: PrivacyEntity
}

type PrivacyInput = {
  content?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
}

type PrivacyRelationResponseCollection = {
  __typename?: 'PrivacyRelationResponseCollection'
  data: Array<PrivacyEntity>
}

declare enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

type Query = {
  __typename?: 'Query'
  announcement?: AnnouncementEntityResponse
  announcements?: AnnouncementEntityResponseCollection
  applicant?: ApplicantEntityResponse
  applicants?: ApplicantEntityResponseCollection
  application?: ApplicationEntityResponse
  applications?: ApplicationEntityResponseCollection
  art?: ArtEntityResponse
  artist?: ArtistEntityResponse
  artists?: ArtistEntityResponseCollection
  arts?: ArtEntityResponseCollection
  author?: AuthorEntityResponse
  authors?: AuthorEntityResponseCollection
  blog?: BlogEntityResponse
  blogs?: BlogEntityResponseCollection
  categories?: CategoryEntityResponseCollection
  category?: CategoryEntityResponse
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
  juri?: JuriEntityResponse
  juriVote?: JuriVoteEntityResponse
  juriVotes?: JuriVoteEntityResponseCollection
  juris?: JuriEntityResponseCollection
  me?: UsersPermissionsMe
  mention?: MentionEntityResponse
  mentions?: MentionEntityResponseCollection
  privacy?: PrivacyEntityResponse
  tag?: TagEntityResponse
  tags?: TagEntityResponseCollection
  term?: TermEntityResponse
  translator?: TranslatorEntityResponse
  translators?: TranslatorEntityResponseCollection
  trend?: TrendEntityResponse
  uploadFile?: UploadFileEntityResponse
  uploadFiles?: UploadFileEntityResponseCollection
  usersPermissionsRole?: UsersPermissionsRoleEntityResponse
  usersPermissionsRoles?: UsersPermissionsRoleEntityResponseCollection
  usersPermissionsUser?: UsersPermissionsUserEntityResponse
  usersPermissionsUsers?: UsersPermissionsUserEntityResponseCollection
  volunteer?: VolunteerEntityResponse
  volunteers?: VolunteerEntityResponseCollection
  vote?: VoteEntityResponse
  votes?: VoteEntityResponseCollection
}

type QueryAnnouncementArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryAnnouncementsArgs = {
  filters?: AnnouncementFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryApplicantArgs = {
  id?: string
}

type QueryApplicantsArgs = {
  filters?: ApplicantFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryApplicationArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryApplicationsArgs = {
  filters?: ApplicationFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryArtArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryArtistArgs = {
  id?: string
}

type QueryArtistsArgs = {
  filters?: ArtistFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryArtsArgs = {
  filters?: ArtFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryAuthorArgs = {
  id?: string
}

type QueryAuthorsArgs = {
  filters?: AuthorFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryBlogArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryBlogsArgs = {
  filters?: BlogFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryCategoriesArgs = {
  filters?: CategoryFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryCategoryArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryCommentsCommentArgs = {
  id?: string
}

type QueryCommentsCommentReportArgs = {
  id?: string
}

type QueryCommentsCommentReportsArgs = {
  filters?: CommentsCommentReportFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type QueryCommentsCommentsArgs = {
  filters?: CommentsCommentFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type QueryCompetitionArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryCompetitionsArgs = {
  filters?: CompetitionFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryHashtagArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryHashtagPostArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryHashtagPostsArgs = {
  filters?: HashtagPostFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryHashtagsArgs = {
  filters?: HashtagFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryI18NLocaleArgs = {
  id?: string
}

type QueryI18NLocalesArgs = {
  filters?: I18NLocaleFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type QueryJuriArgs = {
  id?: string
}

type QueryJuriVoteArgs = {
  id?: string
}

type QueryJuriVotesArgs = {
  filters?: JuriVoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryJurisArgs = {
  filters?: JuriFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryMentionArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryMentionsArgs = {
  filters?: MentionFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryPrivacyArgs = {
  locale?: I18NLocaleCode
  publicationState?: PublicationState
}

type QueryTagArgs = {
  id?: string
  locale?: I18NLocaleCode
}

type QueryTagsArgs = {
  filters?: TagFiltersInput
  locale?: I18NLocaleCode
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryTermArgs = {
  locale?: I18NLocaleCode
  publicationState?: PublicationState
}

type QueryTranslatorArgs = {
  id?: string
}

type QueryTranslatorsArgs = {
  filters?: TranslatorFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryUploadFileArgs = {
  id?: string
}

type QueryUploadFilesArgs = {
  filters?: UploadFileFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type QueryUsersPermissionsRoleArgs = {
  id?: string
}

type QueryUsersPermissionsRolesArgs = {
  filters?: UsersPermissionsRoleFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type QueryUsersPermissionsUserArgs = {
  id?: string
}

type QueryUsersPermissionsUsersArgs = {
  filters?: UsersPermissionsUserFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type QueryVolunteerArgs = {
  id?: string
}

type QueryVolunteersArgs = {
  filters?: VolunteerFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type QueryVoteArgs = {
  id?: string
}

type QueryVotesArgs = {
  filters?: VoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

type StringFilterInput = {
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

type Tag = {
  __typename?: 'Tag'
  announcements?: AnnouncementRelationResponseCollection
  applications?: ApplicationRelationResponseCollection
  arts?: ArtRelationResponseCollection
  blogs?: BlogRelationResponseCollection
  code?: string
  createdAt?: string
  hashtag_posts?: HashtagPostRelationResponseCollection
  label?: string
  locale?: string
  localizations?: TagRelationResponseCollection
  publishedAt?: string
  updatedAt?: string
}

type TagAnnouncementsArgs = {
  filters?: AnnouncementFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TagApplicationsArgs = {
  filters?: ApplicationFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TagArtsArgs = {
  filters?: ArtFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TagBlogsArgs = {
  filters?: BlogFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TagHashtag_PostsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TagLocalizationsArgs = {
  filters?: TagFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TagEntity = {
  __typename?: 'TagEntity'
  attributes?: Tag
  id?: string
}

type TagEntityResponse = {
  __typename?: 'TagEntityResponse'
  data?: TagEntity
}

type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection'
  data: Array<TagEntity>
  meta: ResponseCollectionMeta
}

type TagFiltersInput = {
  and?: Array<TagFiltersInput>
  announcements?: AnnouncementFiltersInput
  applications?: ApplicationFiltersInput
  arts?: ArtFiltersInput
  blogs?: BlogFiltersInput
  code?: StringFilterInput
  createdAt?: DateTimeFilterInput
  hashtag_posts?: HashtagPostFiltersInput
  id?: IdFilterInput
  label?: StringFilterInput
  locale?: StringFilterInput
  localizations?: TagFiltersInput
  not?: TagFiltersInput
  or?: Array<TagFiltersInput>
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
}

type TagInput = {
  announcements?: Array<string>
  applications?: Array<string>
  arts?: Array<string>
  blogs?: Array<string>
  code?: string
  hashtag_posts?: Array<string>
  label?: string
  publishedAt?: string
}

type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection'
  data: Array<TagEntity>
}

type Term = {
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

type TermLocalizationsArgs = {
  publicationState?: PublicationState
}

type TermEntity = {
  __typename?: 'TermEntity'
  attributes?: Term
  id?: string
}

type TermEntityResponse = {
  __typename?: 'TermEntityResponse'
  data?: TermEntity
}

type TermInput = {
  content?: string
  image?: string
  publishedAt?: string
  slug?: string
  title?: string
}

type TermRelationResponseCollection = {
  __typename?: 'TermRelationResponseCollection'
  data: Array<TermEntity>
}

type Translator = {
  __typename?: 'Translator'
  createdAt?: string
  languages: string
  posts?: HashtagPostRelationResponseCollection
  profile: ComponentProfileUser
  publishedAt?: string
  updatedAt?: string
  user?: UsersPermissionsUserEntityResponse
}

type TranslatorPostsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type TranslatorEntity = {
  __typename?: 'TranslatorEntity'
  attributes?: Translator
  id?: string
}

type TranslatorEntityResponse = {
  __typename?: 'TranslatorEntityResponse'
  data?: TranslatorEntity
}

type TranslatorEntityResponseCollection = {
  __typename?: 'TranslatorEntityResponseCollection'
  data: Array<TranslatorEntity>
  meta: ResponseCollectionMeta
}

type TranslatorFiltersInput = {
  and?: Array<TranslatorFiltersInput>
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  languages?: StringFilterInput
  not?: TranslatorFiltersInput
  or?: Array<TranslatorFiltersInput>
  posts?: HashtagPostFiltersInput
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  user?: UsersPermissionsUserFiltersInput
}

type TranslatorInput = {
  languages?: string
  posts?: Array<string>
  profile?: ComponentProfileUserInput
  publishedAt?: string
  user?: string
}

type Trend = {
  __typename?: 'Trend'
  createdAt?: string
  en?: TrendData[]
  nl?: TrendData[]
  tr?: TrendData[]
  updatedAt?: string
}

type TrendEntity = {
  __typename?: 'TrendEntity'
  attributes?: Trend
  id?: string
}

type TrendEntityResponse = {
  __typename?: 'TrendEntityResponse'
  data?: TrendEntity
}

type TrendInput = {
  en?: any
  nl?: any
  tr?: any
}

type UploadFile = {
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

type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: UploadFile
  id?: string
}

type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: UploadFileEntity
}

type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

type UploadFileFiltersInput = {
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

type UploadFileInput = {
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

type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: boolean
}

type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: boolean
}

type UsersPermissionsLoginInput = {
  identifier: string
  password: string
  provider?: string
}

type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: string
  user: UsersPermissionsMe
}

type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: boolean
  confirmed?: boolean
  email?: string
  id: string
  role?: UsersPermissionsMeRole
  username: string
}

type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: string
  id: string
  name: string
  type?: string
}

type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: boolean
}

type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: string
  createdAt?: string
  role?: UsersPermissionsRoleEntityResponse
  updatedAt?: string
}

type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: UsersPermissionsPermission
  id?: string
}

type UsersPermissionsPermissionFiltersInput = {
  action?: StringFilterInput
  and?: Array<UsersPermissionsPermissionFiltersInput>
  createdAt?: DateTimeFilterInput
  id?: IdFilterInput
  not?: UsersPermissionsPermissionFiltersInput
  or?: Array<UsersPermissionsPermissionFiltersInput>
  role?: UsersPermissionsRoleFiltersInput
  updatedAt?: DateTimeFilterInput
}

type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

type UsersPermissionsRegisterInput = {
  email: string
  password: string
  username: string
}

type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: string
  description?: string
  name: string
  permissions?: UsersPermissionsPermissionRelationResponseCollection
  type?: string
  updatedAt?: string
  users?: UsersPermissionsUserRelationResponseCollection
}

type UsersPermissionsRolePermissionsArgs = {
  filters?: UsersPermissionsPermissionFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type UsersPermissionsRoleUsersArgs = {
  filters?: UsersPermissionsUserFiltersInput
  pagination?: PaginationArg
  sort?: Array<string>
}

type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: UsersPermissionsRole
  id?: string
}

type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: UsersPermissionsRoleEntity
}

type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

type UsersPermissionsRoleFiltersInput = {
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

type UsersPermissionsRoleInput = {
  description?: string
  name?: string
  permissions?: Array<string>
  type?: string
  users?: Array<string>
}

type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: boolean
}

type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  applicant?: ApplicantEntityResponse
  artist?: ArtistEntityResponse
  author?: AuthorEntityResponse
  avatar?: UploadFileEntityResponse
  blocked?: boolean
  confirmed?: boolean
  createdAt?: string
  created_posts?: HashtagPostRelationResponseCollection
  email: string
  fullname?: string
  juri?: JuriEntityResponse
  provider?: string
  role?: UsersPermissionsRoleEntityResponse
  translator?: TranslatorEntityResponse
  updatedAt?: string
  username: string
  volunteer?: VolunteerEntityResponse
  votes?: VoteRelationResponseCollection
}

type UsersPermissionsUserCreated_PostsArgs = {
  filters?: HashtagPostFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type UsersPermissionsUserVotesArgs = {
  filters?: VoteFiltersInput
  pagination?: PaginationArg
  publicationState?: PublicationState
  sort?: Array<string>
}

type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: UsersPermissionsUser
  id?: string
}

type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: UsersPermissionsUserEntity
}

type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

type UsersPermissionsUserFiltersInput = {
  and?: Array<UsersPermissionsUserFiltersInput>
  applicant?: ApplicantFiltersInput
  artist?: ArtistFiltersInput
  author?: AuthorFiltersInput
  blocked?: BooleanFilterInput
  confirmationToken?: StringFilterInput
  confirmed?: BooleanFilterInput
  createdAt?: DateTimeFilterInput
  created_posts?: HashtagPostFiltersInput
  email?: StringFilterInput
  fullname?: StringFilterInput
  id?: IdFilterInput
  juri?: JuriFiltersInput
  not?: UsersPermissionsUserFiltersInput
  or?: Array<UsersPermissionsUserFiltersInput>
  password?: StringFilterInput
  provider?: StringFilterInput
  resetPasswordToken?: StringFilterInput
  role?: UsersPermissionsRoleFiltersInput
  translator?: TranslatorFiltersInput
  updatedAt?: DateTimeFilterInput
  username?: StringFilterInput
  volunteer?: VolunteerFiltersInput
  votes?: VoteFiltersInput
}

type UsersPermissionsUserInput = {
  applicant?: string
  artist?: string
  author?: string
  avatar?: string
  blocked?: boolean
  confirmationToken?: string
  confirmed?: boolean
  created_posts?: Array<string>
  email?: string
  fullname?: string
  juri?: string
  password?: string
  provider?: string
  resetPasswordToken?: string
  role?: string
  translator?: string
  username?: string
  volunteer?: string
  votes?: Array<string>
}

type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

type Volunteer = {
  __typename?: 'Volunteer'
  approved?: boolean
  availableHours: number
  comment?: string
  country?: Enum_Volunteer_Country
  createdAt?: string
  hearedFrom?: string
  phone?: string
  profile?: ComponentProfileUser
  public?: boolean
  publishedAt?: string
  updatedAt?: string
  user?: UsersPermissionsUserEntityResponse
}

type VolunteerEntity = {
  __typename?: 'VolunteerEntity'
  attributes?: Volunteer
  id?: string
}

type VolunteerEntityResponse = {
  __typename?: 'VolunteerEntityResponse'
  data?: VolunteerEntity
}

type VolunteerEntityResponseCollection = {
  __typename?: 'VolunteerEntityResponseCollection'
  data: Array<VolunteerEntity>
  meta: ResponseCollectionMeta
}

type VolunteerFiltersInput = {
  and?: Array<VolunteerFiltersInput>
  approved?: BooleanFilterInput
  availableHours?: IntFilterInput
  comment?: StringFilterInput
  country?: StringFilterInput
  createdAt?: DateTimeFilterInput
  hearedFrom?: StringFilterInput
  id?: IdFilterInput
  not?: VolunteerFiltersInput
  or?: Array<VolunteerFiltersInput>
  phone?: StringFilterInput
  public?: BooleanFilterInput
  publishedAt?: DateTimeFilterInput
  updatedAt?: DateTimeFilterInput
  user?: UsersPermissionsUserFiltersInput
}

type VolunteerInput = {
  approved?: boolean
  availableHours?: number
  comment?: string
  country?: Enum_Volunteer_Country
  hearedFrom?: string
  phone?: string
  profile?: ComponentProfileUserInput
  public?: boolean
  publishedAt?: string
  user?: string
}

type Vote = {
  __typename?: 'Vote'
  application?: ApplicationEntityResponse
  createdAt?: string
  publishedAt?: string
  updatedAt?: string
  value: number
  voter?: UsersPermissionsUserEntityResponse
}

type VoteEntity = {
  __typename?: 'VoteEntity'
  attributes?: Vote
  id?: string
}

type VoteEntityResponse = {
  __typename?: 'VoteEntityResponse'
  data?: VoteEntity
}

type VoteEntityResponseCollection = {
  __typename?: 'VoteEntityResponseCollection'
  data: Array<VoteEntity>
  meta: ResponseCollectionMeta
}

type VoteFiltersInput = {
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

type VoteInput = {
  application?: string
  publishedAt?: string
  value?: number
  voter?: string
}

type VoteRelationResponseCollection = {
  __typename?: 'VoteRelationResponseCollection'
  data: Array<VoteEntity>
}
