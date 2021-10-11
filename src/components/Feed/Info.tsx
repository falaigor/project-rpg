import { Box } from "@chakra-ui/react";

interface InfoProps {
  title: string;
  description: string;
}
export const Info = ({ title, description }: InfoProps) => {
  return (
    <>
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
    </>
  );
};
