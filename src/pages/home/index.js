import "./index.scss";
import Footer from "../../components/footer/index.jsx";

const menuList = [
  {
    typeName: "村民",
    icon: "https://dodo.ac/np/images/7/7e/Boone_NH_Villager_Icon.png",
    pageType: "",
    url: "/list??type=villagers",
  },
  {
    typeName: "鱼",
    icon: "https://dodo.ac/np/images/thumb/f/f1/Fish_NH_Icon_cropped.png/42px-Fish_NH_Icon_cropped.png",
    pageType: "",
    url: "/list?type=fish",
  },
  {
    typeName: "昆虫",
    icon: "https://dodo.ac/np/images/thumb/7/7c/Bug_NH_Icon_cropped.png/30px-Bug_NH_Icon_cropped.png",
    pageType: "",
    url: "/list?type=bugs",
  },
  {
    typeName: "海洋生物",
    icon: "https://dodo.ac/np/images/thumb/f/ff/Sea_Creature_NH_Icon.png/40px-Sea_Creature_NH_Icon.png",
    pageType: "",
    url: "/list?type=seaCreature",
  },
  {
    typeName: "艺术品",
    icon: "https://dodo.ac/np/images/thumb/1/1c/Famous_Painting_NH_Icon.png/38px-Famous_Painting_NH_Icon.png",
    pageType: "",
    url: "/list?type=artWork",
  },
  {
    typeName: "家具",
    icon: "https://dodo.ac/np/images/thumb/a/af/FurnitureButton.png/32px-FurnitureButton.png",
    pageType: "",
    url: "/list?type=furniture",
  },
  {
    typeName: "服装",
    icon: "https://dodo.ac/np/images/thumb/1/17/ClothingButton.png/32px-ClothingButton.png",
    pageType: "",
    url: "/list?type=clothing",
  },
  {
    typeName: "工具",
    icon: "https://dodo.ac/np/images/thumb/4/44/ToolButton.png/32px-ToolButton.png",
    pageType: "",
    url: "/list?type=tool",
  },
  {
    typeName: "食谱",
    icon: "https://dodo.ac/np/images/thumb/1/15/DIYButton.png/32px-DIYButton.png",
    pageType: "",
    url: "/list?type=recipes",
  },
  {
    typeName: "音乐",
    icon: "https://dodo.ac/np/images/thumb/9/93/MusicButton.png/32px-MusicButton.png",
    pageType: "",
    url: "/list?type=music",
  },
];

const listRender = menuList.map((item) => {
  return (
    <div className="block">
      <img src={item.icon} alt={item.typeName}/>
    </div>
  );
});
const Home = () => {
  return (
    <>
      <div className="home-container flex-center">
        <div className="phone-container">{listRender}</div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
