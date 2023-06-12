import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer
      className="rounded-lg shadow my-4"
      style={{ backgroundColor: "var(--footer)" }}
    >
      <div className="w-full mx-auto max-w-prose p-3 md:flex md:items-center text-center md:justify-between">
        <span class="text-md sm:text-center">
          Copyright © 2023 Sai Chakri D
        </span>
        <ul class="flex flex-wrap justify-center text-sm font-medium text-gray-500 dark:text-gray-400 space-x-5 my-3">
          <li className="w-10">
            <a href="mailto:saichakri.d@gmail.com">
              {
                <EmailIcon
                  sx={{
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      color: "#f2a60c",
                    },
                    "&:active": {
                      color: "#bc544b",
                    },
                  }}
                />
              }
            </a>
          </li>
          <li className="w-10">
            <a
              href="https://www.linkedin.com/in/sai-chakri-d-ba3546278/"
              target="_blank"
              rel="noreferrer"
            >
              {
                <LinkedInIcon
                  sx={{
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      color: "#0A66C2",
                    },
                    "&:active": {
                      color: "#bc544b",
                    },
                  }}
                />
              }
            </a>
          </li>
          <li className="w-10">
            <a
              href="https://github.com/SaiChakri-d/"
              target="_blank"
              rel="noreferrer"
            >
              {
                <GitHubIcon
                  sx={{
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      color: "#6e5494",
                    },
                    "&:active": {
                      color: "#bc544b",
                    },
                  }}
                />
              }
            </a>
          </li>
          <li className="w-10">
            <a
              href="https://twitter.com/dschakri117/"
              target="_blank"
              rel="noreferrer"
            >
              {
                <TwitterIcon
                  sx={{
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      color: "#1da1f2",
                    },
                    "&:active": {
                      color: "#bc544b",
                    },
                  }}
                />
              }
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
