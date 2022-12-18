import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import { useMutation, useQuery } from "react-query";
import { fetchDetailPosts, fetchPutPosts } from "../../api/posts";
import { FlexLayout, Label, Input, Textarea } from "@/styles/common.styled";
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
function PostEditById() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  const detailPostStats = useQuery(["detail", id], () =>
    fetchDetailPosts(Number(id))
  );
  const saveMutation = useMutation(["save", id], () =>
    fetchPutPosts({
      title,
      body,
      id,
    })
  );

  useEffect(() => {
    if (!detailPostStats.isLoading) {
      setTitle(detailPostStats.data.data.title);
      setBody(detailPostStats.data.data.body);
    }
  }, [detailPostStats.isLoading, detailPostStats]);

  const handleGoList = () => {
    router.push("/");
  };

  const handleSave = (params) => {
    saveMutation.mutate(params),
      {
        onSuccess: (data) => {
          console.log(data);
          window.alert("저장이 완료되었습니다");
        },
      };
  };

  return (
    <Layout>
      <CreateIdLayout>
        <Title>
          <FlexLayout className="alignItemsC">
            <Label htmlFor="title">제목</Label>
            <Input
              value={title || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.currentTarget.value)
              }
            />
          </FlexLayout>
        </Title>
        <Body>
          <FlexLayout>
            <Label htmlFor="body">내용</Label>
            <Textarea
              name="editBody"
              id="editBody"
              value={body || ""}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setBody(e.currentTarget.value)
              }
            />
          </FlexLayout>
        </Body>
        {/* 목록,저장 버튼 */}
        <BtnWrap className="btnWrap">
          <FlexLayout className="justifyContentB">
            <Button type="button" label="목록" onClick={handleGoList} />
            <Button type="button" label="저장" onClick={handleSave} />
          </FlexLayout>
        </BtnWrap>
      </CreateIdLayout>
    </Layout>
  );
}
export default PostEditById;
