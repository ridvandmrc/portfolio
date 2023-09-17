import { IProject } from "@/utils/models";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json<IProject[]>([
    {
      title: "Design Tokens with Token Wizard",
      link: "https://medium.com/@rdvndmrc/design-tokens-with-token-wizard-2d95d4c84685",
      description:
        "Design Tokens are essentially a set of variables or key-value pairs that define design properties such as colors, typography, spacing, and more",
    },
    {
      title: "Smarter Search by React Query",
      link: "https://medium.com/@rdvndmrc/smarter-search-by-react-query-cff14220c539",
      description:
        "We also use a lot of search operations in our applications, sometimes they can be from little data and sometimes from too much data (more than 1 million)",
    },
    {
      title: "Optimistic UI with react-query",
      link: "https://medium.com/@rdvndmrc/optimistic-ui-with-react-query-c22db4200e3",
      description:
        "If we have already known the data that we will use later, we can use this (optimistic UI) approach. While users add/remove/update some data, optimistic data is shown to user data, and the request is fired in the background.",
    },
    {
      title: "Conditional Rendering in React",
      link: "https://medium.com/@rdvndmrc/conditional-rendering-in-react-d2dfb22c79ff",
      description:
        "Conditional rendering is needed for all libraries and frameworks, in this post React was chosen but you can apply the approach explained in this post to all libraries and frameworks (Vue, angular …).",
    },
  ]);
}
