import { CSSProperties, ReactNode, MouseEvent } from 'react';
import {
    ButtonType,
    DisabledType,
    FileAcceptType,
    FlexReverseType,
    FontWeightType,
    FormatDateType,
    IconFamilyType,
    LoadingType,
    QueryOrderType,
    RefineType,
    ResourceType,
    SemanticType,
    SizeType,
    UploadAcceptType,
} from './types.util';
import { LucideIcon } from 'lucide-react';

export interface ISetLoading {
    option: LoadingType;
    type?: string;
}

export interface IUnsetLoading {
    option: LoadingType;
    type?: string;
    message?: string;
}

export interface IModalProps {
    show: boolean;
    header?: boolean;
    title: string;
    flattened?: boolean;
    className?: string;
    size?: SizeType;
    closeModal(e?: any): void;
}
export interface IGetStartedModal extends IModalProps {}

export interface ICustomModal {
    show: boolean;
    title: string;
    header?: boolean;
    flattened?: boolean;
    className?: string;
    size?: SizeType;
    child?: ReactNode;
    children: ReactNode;
    hideOnClose?: boolean;
    backdrop?: {
        bgColor?: '';
    };
    closeModal(e?: any): void;
}

export interface ICollection {
    data: Array<any>;
    count: number;
    total: number;
    pagination: IPagination;
    loading: boolean;
    refineType?: RefineType;
    message?: string;
    payload?: any;
}

export interface IPagination {
    next: { page: number; limit: number };
    prev: { page: number; limit: number };
}

export interface IDivider {
    show?: boolean;
    bg?: string;
    padding?: {
        enable?: boolean;
        top?: string;
        bottom?: string;
    };
}

export interface IBadge {
    type: SemanticType;
    label: string;
    display?: 'badge' | 'status';
    className?: string;
    style?: CSSProperties;
    size?: SizeType;
    padding?: { y: number; x: number };
    font?: {
        weight?: FontWeightType;
        size: number;
    };
    upper?: boolean;
    close?: boolean;
    onClose?(e: any): void;
}

export interface INavbar {
    isSticky?: boolean;
    className?: string;
    links: Array<INavLink>;
}

export interface IFooter extends INavbar {}

export interface INavLink {
    name: string;
    label: string;
    url: string;
    onClick?(e: MouseEvent<HTMLAnchorElement>): void;
}

export interface IFooter {}

export interface IState {
    code: string;
    name: string;
    subdivision: string;
}

export interface ITimezone {
    name: string;
    label: string;
    displayName: string;
    countries: Array<string>;
    utcOffset: string;
    utcOffsetStr: string;
    dstOffset: string;
    dstOffsetStr: string;
    aliasOf: string;
}

export interface IUserCountry {
    name: string;
    code2: string;
    code3: string;
    capital: string;
    region: string;
    currencyCode: string;
    phoneCode: string;
    timezones: Array<ITimezone>;
}

export interface ICountry {
    name: string;
    code2: string;
    code3: string;
    capital: string;
    region: string;
    subregion: string;
    states: Array<IState>;
    slug: string;
    timezones: Array<ITimezone>;
    flag: string;
    base64: string;
    currencyCode: string;
    currencyImage: string;
    phoneCode: string;
}

export interface IDateToday {
    year: string;
    month: string;
    date: string;
    hour: string;
    minutes: string;
    seconds: string;
    ISO: string;
    dateTime: string | number;
}

export interface ITableHead {
    className?: string;
    items: Array<ICellHead>;
}
export interface ICellHead {
    fontSize?: number;
    className?: string;
    label: string;
    isEnabled?: boolean;
    style?: CSSProperties;
}
export interface ICellData {
    fontSize?: number;
    className?: string;
    large?: boolean;
    style?: CSSProperties;
    children: ReactNode;
    onClick?(e: MouseEvent<any>): void;
}

export interface ISetCookie {
    key: string;
    payload: any;
    expireAt?: Date;
    maxAge?: number;
    path?: string;
}

export interface IGetCookie {
    key: string;
    parse?: boolean;
}

export interface IRemoveCookie {
    key: string;
    parse?: boolean;
}

export interface IAPIResponse {
    error: boolean;
    errors: Array<any>;
    report?: IAPIReport;
    count?: number;
    total?: number;
    pagination?: IPagination;
    data: any;
    message: string;
    token?: string;
    status: number;
}

export interface ISidebar {
    pageTitle: string;
    collapsed: boolean;
}

export interface ITopbar {
    pageTitle: string;
    sticky?: boolean;
    showBack: boolean;
}

export interface IAPIReport {
    format: string;
    csv?: string;
    xml?: any;
    pdf?: any;
}

export interface IUserPermission {
    entity: string;
    actions: Array<string>;
}

export interface IAPIKey {
    secret: string;
    public: string;
    token: string;
    publicToken: string;
    domain: string;
    isActive: boolean;
    updatedAt: string;
}

export interface IAudioHelper {
    progressBar: any;
    audioPlayer: any;
    progressCont: any;
    audioDuration: number | string;
    audioCurrentTime: number | string;
    audioId: string;
    playAudio(id: string): void;
    pauseAudio(id: string): void;
    muteAudio(id: string): void;
    unmuteAudio(id: string): void;
    getSeek(id: string): void;
    getSeekBar(id: string): void;
    getAudio(id: string, index: number): void;
    updateProgress(e: any): void;
    setProgress(e: any): void;
    initProgress(audioId: string): void;
    getDuration(meta: any): string | number;
    convertDuration(tm: any): string | number;
    convertTime(tm: any): string | number;
    formatTime(tm: any): { hours: number; minutes: number; seconds: number };
}

export interface IVideoHelper {
    duration: string | number;
    playVideo(id: string): void;
    pauseVideo(id: string): void;
    muteVideo(id: string): void;
    unmuteVideo(id: string): void;
    changeView(id: string): void;
    seekVideo(id: string, barId: string, timeId: string): void;
    timeUpdate(id: string, barId: string, timeId: string): void;
    getDuration(id: string, timeId: string): string;
    setVolume(id: string, rid: string): void;
    seekProgress(id: string, barId: string, seekId: string): void;
    convertTime(tm: any): string;
    formatTime(tm: any): { hours: number; minutes: number; seconds: number };
}

export interface IVideoControls {
    videoId: string;
    volumeId: string;
    timeId: string;
    barId: string;
    seekId: string;
    play: boolean;
    expand: boolean;
    playPause(e: any, id: string): void;
    expandView(e: any): void;
}

export interface IOverControls {
    videoId: string;
    play: boolean;
    plaux: boolean;
    type: string;
    audioName: string;
    index: number;
    playPause(e: any, id: string): void;
    playAudio(e: any, id: string, index: number): void;
}

export interface IAudioControls {
    name: string;
    play: boolean;
    muted: boolean;
    source: string;
    index: number;
    expand: boolean;
    playPause(e: any, id: string, index: number): void;
    muteToggle(e: any, id: string): void;
    expandView(e: any): void;
}

export interface IFileUpload {
    raw: any;
    base64: string;
    parsedSize: number;
    sizeExt: string;
    name: string;
    size: number;
    type: string;
    dur: number;
}

export interface IFileog {
    sizeLimit?: number;
    accept: UploadAcceptType;
    type: FileAcceptType;
    onSelect(file: IFileUpload): void;
}

export interface IFileogRef {
    open: (e?: any) => void;
    browse: () => void;
    getSize: (size: number) => { KB: number; MB: number };
}

export interface IListQuery {
    id?: string;
    limit?: number;
    paginate?: string;
    page?: number;
    select?: string;
    order?: QueryOrderType;
    type?: string;
    admin?: boolean;
    mapped?: boolean;
    from?: string;
    to?: string;
    resource?: ResourceType;
    resourceId?: string;
    key?: string;
    payload?: any;
    cache?: boolean;
    report?: boolean;
}

export interface IStorage {
    storeAuth(token: string, id: string): void;
    checkToken(): boolean;
    getToken(): string | null;
    checkUserID(): boolean;
    getUserID(): string;
    checkUserEmail(): boolean;
    getUserEmail(): string | null;
    getConfig(): any;
    getConfigWithBearer(): any;
    clearAuth(): void;
    keep(key: string, data: any): boolean;
    keepLegacy(key: string, data: any): boolean;
    fetch(key: string): any;
    fetchLegacy(key: string): any;
    deleteItem(key: string, legacy?: boolean): void;
    trimSpace(str: string): void;
    copyCode(code: string): void;
}

export interface IHelper {
    scrollTo(id: string): void;
    scrollToTop(): void;
    addClass(id: string, cn: string): void;
    removeClass(id: string, cn: string): void;
    splitQueries(query: any, key: string): any;
    decodeBase64(data: string): { width: string; height: string; image: any };
    isEmpty(data: any, type: 'object' | 'array'): boolean;
    capitalize(val: string): string;
    sort(data: Array<any>): Array<any>;
    days(): Array<{ id: number; name: string; label: string }>;
    months(): Array<{ id: number; name: string; label: string }>;
    random(size: number, isAlpha?: boolean): string;
    formatDate(date: any, type: FormatDateType): string;
    isNAN(val: any): boolean;
    reposition(data: Array<any>, from: number, to: number): Array<any>;
    prioritize(data: Array<any>, prio: Array<any>, key?: string): Array<any>;
    splitByComma(data: string): Array<string>;
    dateToday(date: string | Date): IDateToday;
    roundFloat(val: number): number;
    addElipsis(val: string, size: number): string;
    formatPhone(val: string, code: string): string;
    leadingZero(val: number): string;
    encodeCardNumber(num: string): string;
    monthsOfYear(val: string | number): string;
    readCountries(): Array<any>;
    listCountries(): Array<{ code: string; name: string; phone: string }>;
    sortData(data: Array<any>, filter: string): Array<any>;
    attachPhoneCode(code: string, phone: string, include: boolean): string;
    capitalizeWord(value: string): string;
    shrinkWordInString(value: string, ret: number): string;
    truncateText(text: string, max: number): string;
    objectToArray(data: Object | any): Array<any>;
    displayBalance(value: number): string;
    parseInputNumber(value: string, type: 'number' | 'decimal'): number;
    toDecimal(value: number, places: number): number;
    formatCurrency(currency: string): string;
    currentDate(): Date;
    getCurrentPage(data: IPagination): number;
    getInitials(value: string): string;
    hyphenate(action: 'add' | 'remove', val: string): string;
    daysFromDates(start: string, end: string): number;
    getCountry(code: string): ICountry | null;
    getAvatar(select: string | number): string;
    enumToArray(
        data: Object,
        type: 'all' | 'values-only' | 'keys-only',
    ): Array<any>;
    extractor(data: any): any;
}

export interface IButton {
    id?: string;
    text: {
        label: string;
        size?: number;
        weight?: FontWeightType;
    };
    type?: ButtonType;
    url?: string;
    semantic?: SemanticType;
    size?: SizeType;
    fill?: boolean;
    loading?: boolean;
    disabled?: boolean;
    disabledType?: DisabledType;
    block?: boolean;
    className?: string;
    reverse?: FlexReverseType;
    style?: CSSProperties;
    icon?: {
        enable: boolean;
        className?: string;
        child: ReactNode;
    };
    onClick(e: MouseEvent<HTMLAnchorElement>): void;
}

export interface IIconButton {
    icon: {
        size?: number;
        className?: string;
        name: string;
        type: IconFamilyType;
        child?: ReactNode;
    };
    label?: {
        text: string;
        className?: string;
        size?: number;
        weight?: FontWeightType;
    };
    initBg?: boolean;
    active?: boolean;
    url?: string;
    size?: string;
    className?: string;
    radius?: string;
    onClick(e?: any): void;
}

export interface ISVGIcon {
    name: 'check' | 'x' | 'cancel';
    size?: number;
    position?: 'absolute' | 'relative';
    width?: string;
    height?: string;
    className?: string;
    style?: CSSProperties;
    stroke?: number;
    onClick?(e: MouseEvent<HTMLAnchorElement>): void;
}

export interface IICon {
    type: IconFamilyType;
    name: string;
    size?: number;
    position?: 'absolute' | 'relative';
    clickable?: boolean;
    url?: string;
    height?: number;
    className?: string;
    style?: CSSProperties;
    onClick?(e: MouseEvent<HTMLAnchorElement>): void;
}

export interface IAppContext {
    items: Array<any>;
    loading: boolean;
    loader: boolean;
    setItems(data: Array<any>): void;
    setCollection(type: string, data: ICollection): void;
    setResource(type: string, data: any): void;
    setLoading(data: ISetLoading): Promise<void>;
    unsetLoading(data: IUnsetLoading): Promise<void>;
}

export interface IToast {
    position:
        | 'top-left'
        | 'top-right'
        | 'top-center'
        | 'bottom-left'
        | 'bottom-right'
        | 'bottom-center';
    show: boolean;
    title?: string;
    message?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    close: (e?: any) => void;
}

export type NavIconVariant = 'neutral' | 'brand' | 'brand-filled';

export type NavDropdownItem = {
    title: string;
    description: string;
    href: string;
    external?: boolean;
    icon?: LucideIcon;
    iconVariant?: NavIconVariant;
    image?: string;
};

export type NavSection = {
    label: string;
    items: NavDropdownItem[];
};

export type NavItem =
    | {
          label: string;
          href: string;
          dropdownItems?: never;
          sections?: never;
      }
    | {
          label: string;
          href?: never;
          dropdownItems: NavDropdownItem[];
          sections?: never;
      }
    | {
          label: string;
          href?: never;
          dropdownItems?: never;
          sections: NavSection[];
      };

export type IPurposeCard = {
    number: string;
    label: string;
    title: string;
    description: string;
    className: string;
    dark?: boolean;
};

export type IEvent = {
    day: string;
    month: string;
    type: string;
    location: string;
    title: string;
    description: string;
    accent: string;
    image?: string;
    desc?: string;
    content?: string[];
    author?: string;
    bgImage?: string;
    alt?: string;
    tags?: string[];
    isFeatured?: boolean;
    slug?: string;
};

export interface ITestimonial {
    quote: string;
    name: string;
    role: string;
    brand: string;
    image: string;
    alt: string;
}

export interface IStory {
    author: string;
    image: string;
    alt: string;
    tags: string[];
    title: string;
    desc: string;
    slug: string;
    content?: string[];
}

export interface ITeamMember {
    name: string;
    role: string;
    image: string;
    alt: string;
    position?: string;
}