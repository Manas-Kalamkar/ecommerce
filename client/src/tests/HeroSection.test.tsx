import HeroSection from "../components/HeroSection";
import { render, screen } from "../test-utils";
import { ThemeProvider } from "styled-components";
import { describe, it, expect } from "vitest";
import { theme } from "../App";

//describe : groups related tests , organize output
describe("Hero Section", () => {
    //it / test : single test case
    it("should render heading", () => {
        //render : mount React component into the fake DOM, Simulates browser environment
        render(
            <ThemeProvider theme={theme}>
                <HeroSection myData="Heading" />
            </ThemeProvider>)

        //expect : asseration engine , this verifies the behavior
        expect(screen.getByText("Heading")).toBeInTheDocument();
    })
})