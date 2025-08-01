import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type ParamsType = Promise<{ uid: string }>;

export default async function Page(props: { params: Promise<ParamsType> }) {
  const { uid } = await props.params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(
  props: {
    params: Promise<{ uid: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => ({ uid: page.uid }));
}
