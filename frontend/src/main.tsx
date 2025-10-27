import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./views/homepage";
import SnippetList from "./views/snippetList";
import SnippetDetails from "./views/snippetDetails";
import Profile from "./views/profile";
import SignupForm from "./views/signupForm";
import LoginForm from "./views/loginForm";
import SnippetForm from "./views/snippetForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/snippets" element={<SnippetList />} />
        <Route path="/snippets/creation" element={<SnippetForm />} />
        <Route path="/snippets/:id" element={<SnippetDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
