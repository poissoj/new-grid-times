import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { BorderedLink } from "../BorderedLink/BorderedLink";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <BorderedLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </BorderedLink>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr 48px;
  gap: 16px;

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-column: 2;
  grid-row: 1;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
