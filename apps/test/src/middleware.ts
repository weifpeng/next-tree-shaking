import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// See "Matching Paths" below to learn more

export const middleware = withAuth({
  pages: {
    signIn: "/account/signup",
  },
});

export const config = {
  matcher: [
    "/((?!/api/graphql|api/init|api/test|api/admin/migrate|api/casdoor/login-oauth-authorize|api/casdoor/get-captcha|api/casdoor/send-verification-code|api/pay/callback|_next/static|_next/image|favicon.ico).*)",
    // "/((?!api/init|api/test|api/admin/migrate|api/casdoor/login-oauth-authorize|api/casdoor/get-captcha|api/casdoor/send-verification-code|monitoring|api/pay/callback|_next/static|_next/image|favicon.ico).*)",
  ],
};
