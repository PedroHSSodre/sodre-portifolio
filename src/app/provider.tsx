"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};
export default function Providers({ children }: ProviderProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
