import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// createRouteMatcher 可以驗證使用者是否為登入狀態，然後 redirect routes
const protectedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recording",
  "/personal-room",
  "/meeting(.*)", // 允許 meeting 後面接任何字串(id)
]);

export default clerkMiddleware((auth, req) => {
  // 如果使用者在protectedRoutes裡面任何url，進行驗證
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
