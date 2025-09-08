import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return <Slot />;
}
