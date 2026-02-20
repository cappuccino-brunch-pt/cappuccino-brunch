import "i18next";

/**
 * Custom type declaration ensuring that DefaultTFuncReturn always returns a string.
 *
 * Stack Overflow: https://stackoverflow.com/questions/74143213/how-to-handle-i18next-new-type-defaulttfuncreturn
 * Official Documentation: https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
 */
declare module "i18next" {
    interface CustomTypeOptions {
        returnNull: false;
    }
}
