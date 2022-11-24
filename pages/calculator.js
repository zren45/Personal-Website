import Layout from "../components/layout/article";
import MintCalculator from "../components/mint-calculator";
import { Heading } from "@chakra-ui/react";

export default function MintProfit() {
  return (
    <Layout title={"Mint Calculator"}>
      <Heading>this tool is deprecated </Heading>
      <MintCalculator />
    </Layout>
  );
}
