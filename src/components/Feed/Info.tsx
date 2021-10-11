import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AppRoute } from "Routes/routes";

interface InfoProps {
  slug: string;
  title: string;
  description: string;
}

export const Info = ({ slug, title, description }: InfoProps) => {
  return (
    <Link to={`${AppRoute.Publication}/${slug}`}>
      <Box
        mt="3"
        fontWeight="semibold"
        fontSize="1.6rem"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {title}
      </Box>

      <Box mt="3" fontWeight="normal" fontSize="0.9rem" lineHeight="tight">
        <p>{description}</p>
      </Box>
    </Link>
  );
};
