export enum CurrencyType {
    NGN = 'NGN',
    USD = 'USD',
}
export enum CurrencySymbol {
    NGN = '₦',
    USD = '$',
}
export enum HeaderType {
    IDEMPOTENT = 'x-idempotent-key',
}
export enum CookieKeyType {
    XHIT = 'x-hit',
}

export const UserEnum = {
    SUPER: 'superadmin',
    ADMIN: 'admin',
    BUSINESS: 'business',
    TALENT: 'talent',
    USER: 'user',
} as const;
export enum PasswordType {
    SELF = 'self',
    GENERATED = 'generated',
    SELF_CHANGED = 'self-changed',
}

export enum StatusEnum {
    PENDING = 'pending',
    ONGOING = 'ongoing',
    ABANDONED = 'abandoned',
    COMPLETED = 'completed',
    SUBMITTED = 'submitted',
    SUCCESSFUL = 'successful',
    FAILED = 'failed',
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}
