/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { motion } from "framer-motion";

const MotionH1 = motion('h1');
const MotionDiv = motion('div');

<MotionH1 className="..." {...motionProps}>...</MotionH1>
<MotionDiv className="..." {...motionProps}>...</MotionDiv>
