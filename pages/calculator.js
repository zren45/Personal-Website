import Layout from "../components/layout/article";
import { Container } from "@chakra-ui/react";
import MintCalculator from "../components/mint-calculator";

export default function MintProfit() {
  return (
    <Layout title={"Mint Calculator"}>
      <MintCalculator />
    </Layout>
  );
}
