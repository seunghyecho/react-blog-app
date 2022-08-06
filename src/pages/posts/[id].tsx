import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchDeletePosts, fetchDetailPosts } from "../api/posts";
import { FlexLayout, Label } from "@/styles/common.styled";
import Button from "@/components/common/Button";

const CreateIdLayout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
`;
const Title = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #efefef;
  h1 {
    color: #619ffb;
  }
`;
const Body = styled.div`
  padding: 15px 0;
  min-height: 300px;
  border-bottom: 1px solid #efefef;

  p {
    width: 90%;
  }
`;

const BtnWrap = styled.div`
  padding: 15px 0;
  .btnEdit {
    margin-right: 3px;
  }
`;
function PostById() {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const detailPostStats = useQuery(["detail", id], () =>
    fetchDetailPosts(Number(id))
  );
  const deleteMutation = useMutation(["delete"], fetchDeletePosts);

  if (detailPostStats.isLoading) {
    return "";
  }

  const handleGoList = () => {
    router.push("/");
  };
  const handleGoEdit = () => {
    router.push(`/edit/${id}`);
  };
  const handleDelete = () => {
    deleteMutation.mutate(Number(id), {
      onSuccess: (data) => {
        console.log(data, "onSuccess");
        queryClient.setQueryData(["posts", Number(id)], data);
        window.alert("삭제되었습니다.");
      },
    });
  };
  return (
    <Layout>
      <CreateIdLayout>
        <Title>
          <FlexLayout className="alignItemsC">
            <Label htmlFor="title">제목</Label>
            <h1>{detailPostStats.data.data.title}</h1>
          </FlexLayout>
        </Title>
        <Body>
          <FlexLayout>
            <Label htmlFor="body">내용</Label>
            <p>{detailPostStats.data.data.body}</p>
          </FlexLayout>
        </Body>
        {/* 삭제, 목록 버튼 */}
        <BtnWrap className="btnWrap">
          <FlexLayout className="justifyContentB">
            <Button type="button" label="목록" onClick={handleGoList} />
            <FlexLayout>
              <Button
                type="button"
                label="수정"
                className="btnEdit"
                onClick={handleGoEdit}
              />
              <Button
                type="button"
                label="삭제"
                className="btnDelete"
                onClick={handleDelete}
              />
            </FlexLayout>
          </FlexLayout>
        </BtnWrap>
      </CreateIdLayout>
    </Layout>
  );
}
export default PostById;
