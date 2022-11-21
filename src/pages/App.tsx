import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  background-color: #edf2f7;
`;

const Main = styled.div`
  background-color: #edf2f7;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
`;

const Header = styled.div`
  color: #000000d1;
  background: #fff;
  height: 50px;
`;

const Center = styled.div`
  color: black;
  background-color: #ffffff;
  max-width: 820px;
  width: calc(100% - 300px);
  height: 100%;
  margin: 10px 0;
`;

const SideBar = styled.div`
  background: #fff;
  width: 300px;
  height: 400px;
  margin: 10px 20px;
  float: right;
  position: sticky;
  top: 30px;
  display: flex;
`;


const Title = styled.h1`
  border-bottom: 1px solid #ddd;
`;

const SubTitle = styled.h2`
  border-bottom: 1px solid #ddd;
`;

const Texts = styled.p`
  border-bottom: 1px solid #ddd;
`;


const App: React.FC = () => {
  return(
    <Content>
    <Header>ヘッダー</Header>
    <Main>
    <Center>
      <Title>タイトル1</Title>
      <SubTitle>サブタイトル</SubTitle>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Title>タイトル1</Title>
      <SubTitle>サブタイトル</SubTitle>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Title>タイトル1</Title>
      <SubTitle>サブタイトル</SubTitle>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Title>タイトル1</Title>
      <SubTitle>サブタイトル</SubTitle>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
      <Texts>テキストエリア</Texts>
    </Center>
    <SideBar>サイドバー</SideBar>
    </Main>
    </Content>
  )
}

export default App;
