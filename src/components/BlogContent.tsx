import React from "react";

interface ImgProps {
  imgUrl: string;
  caption: string;
}

const Img: React.FC<ImgProps> = ({ imgUrl, caption }) => {
  return (
    <div>
      <img src={imgUrl} alt={caption} />
      <p className="text-center text-[16px] my-2 text-zinc-500">{caption}</p>
    </div>
  );
};

interface QuoteProps {
  data: string;
  caption: string;
}

const Quote: React.FC<QuoteProps> = ({ data, caption }) => {
  return (
    <div>
      <div className="py-4 bg-zinc-200/50 border-l-4 px-2 border-zinc-600 rounded-[0.2rem]">
        <div className="pl-2 italic">{data}</div>
      </div>
      <p className="text-center text-[16px] my-2 text-zinc-500">{caption}</p>
    </div>
  );
};

interface ListProps {
  data: string[];
  style: "ordered" | "unordered";
}

const List: React.FC<ListProps> = ({ data, style }) => {
  return (
    <ol
      className={
        style === "ordered"
          ? "list-decimal list-inside"
          : "list-disc list-inside"
      }
    >
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};

interface ImgData {
  caption: string;
  file: { url: string };
}

interface QuoteData {
  caption: string;
  text: string;
}

interface ListData {
  items: string[];
  style: "ordered" | "unordered";
}

interface BlogItem {
  data: {
    text: string;
    level?: number;
    caption?: string;
    file?: { url: string };
    items?: string[];
    style?: "ordered" | "unordered";
  };
  type: string;
}

interface BlogContentProps {
  item: BlogItem;
}

const BlogContent: React.FC<BlogContentProps> = ({ item }) => {
  const { data, type } = item;
  switch (type) {
    case "paragraph":
      return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>;

    case "header":
      return data.level === 2 ? (
        <p
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-4xl"
        ></p>
      ) : (
        <p
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-3xl"
        ></p>
      );

    case "image":
      const imgData = data as ImgData;
      return (
        <Img caption={imgData.caption || ""} imgUrl={imgData.file?.url || ""} />
      );

    case "quote":
      const quoteData = data as QuoteData;
      return <Quote caption={quoteData.caption || ""} data={quoteData.text} />;

    case "list":
      const listData = data as ListData;
      return (
        <List
          data={listData.items || []}
          style={listData.style || "unordered"}
        />
      );
    default:
      return null;
  }
};

export default BlogContent;
