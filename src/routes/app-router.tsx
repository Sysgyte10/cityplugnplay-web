import { Navigate, Route, Routes } from "react-router-dom";
import { webPages } from "../navigation";
import { useAuthStore } from "../hooks/store";
import { Login } from "../pages/auth";

export const AppRouter = () => {
  const { isAuthenticated } = useAuthStore();
  const webPageLength = webPages.length;
  return (
    <Routes>
      {isAuthenticated ? (
        webPages &&
        webPages
          .slice(1, webPageLength)
          .map((items, index) => (
            <Route key={index} path={items.path} element={<items.element />} />
          ))
      ) : (
        <>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </>
      )}
    </Routes>
  );
};
