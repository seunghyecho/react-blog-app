import React from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchDetailPosts, fetchPutPosts } from "@/api/posts";
import Index from "@/components/common/Layout";
import Form from "@/components/post/Form";

function Detail() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery(
    ["detail", id],
    () => fetchDetailPosts(Number(id)),
    {
      enabled: !!id,
    }
  );

  const updateMutation = useMutation(
    (params: any) =>
      fetchPutPosts({
        id,
        ...params,
      }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["detail", id]);
      },
    }
  );

  return (
    <Index>
      {!isLoading && (
        <Form data={data?.data || ""} formMutation={updateMutation} />
      )}
    </Index>
  );
}
export default Detail;
