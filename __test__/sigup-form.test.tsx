import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SignUpForm } from "../app/auth/signUp/signup-form";

describe("SignUpForm", () => {
  it("Should render correctly", () => {
    render(<SignUpForm />);
  });
  screen.debug();
});
