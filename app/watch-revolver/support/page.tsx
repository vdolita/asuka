"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Support() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/wrist-stability/support");
  }, [router]);

  return (
    <Head>
      <meta http-equiv="refresh" content="0;url=/wrist-stability/support" />
    </Head>
  );
}
