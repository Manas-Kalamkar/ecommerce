import App from './App';
import { describe ,expect,it} from 'vitest';
import {render,screen} from '@testing-library/react'
describe("App",()=>{
    it('should have manas', ()=>{
        render(<App />);
        expect(screen.getByText("Welcome to Manass React E-Commerce Website")).toBeInTheDocument();
    })
})