import { useStore } from "@/store";

export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permission = store.state.login.permissions;
  const verifyPermission = `system:${pageName}:${handleName}`;
  return !!permission.find((item) => item === verifyPermission);
}
