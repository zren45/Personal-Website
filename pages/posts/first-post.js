import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout/article";
import { Heading, Text } from "@chakra-ui/react";

export default function FirstPost() {
  return (
    <Layout title="Post">
      <div>
        <Heading> In Progress</Heading>
        <Text>Weeely Task Report and Study Plan</Text>
      </div>
    </Layout>
  );
}
