import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";


export const Leftmenu = () => {
  const [state, setState] = useState({
    text1: "",
    text2: "",
  });
  const [Image, setImage] = useState([]);
  const [output, setOutput] = useState({
    id: null,
    url: "https://imgflip.com/s/meme/Buff-Doge-vs-Cheems.png",
  });

  const [tcolor,setTcolor] = useState("black")
  
  const onchangetext = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    setState({
      ...state,
      [n]: [v],
    });
  };

  const outputfn = (i) => {
    setOutput({
      ...output,
      id: Image[i].id,
      url: Image[i].url,
    });
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setImage(response.data.memes));
  },[]);
  const img = document.getElementById("imgdown");
  function downfn(){
    toPng(img)
    .then(dataurl => {
      download(dataurl,"meme.png")
    })
  }

  return (
    <Box className="main"  gap={4}>
      <Box>
        <Typography variant="h5">Templates</Typography>

        <ImageList
          cols={3}
          gap={8}
          sx={{ width: 600, height: 590, cursor: "pointer" }}
        >
          {Image.map((item, index) => (
            <ImageListItem key={item.id}>
              <img
                src={item.url}
                alt={item.name}
                onClick={() => outputfn(index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box className="outputimg" backgroundColor="white">
        <Typography variant="h5">Customize Template</Typography>
        <div id="imgdown"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
            position: "relative",
            margin: "0px",
          }}
        >
        
          <img 
            src={output.url}
            alt={output.name}
            style={{ width: "350px", height: "400px" }}
          />
         
          <Typography
            variant="p"
            sx={{
              position: "absolute",
              top: "10px",
              left: "130px",
              fontSize: "20px",
              wordWrap: "break-word",
              wordBreak: "break-all",
              width: "250px",
              textIndent:"50px",
              color:tcolor
            }}
          >
            {state.text1}
          </Typography>
          <Typography
            variant="p"
            sx={{
              position: "absolute",
              top: "320px",
              left: "130px",
              wordWrap: "break-word",
              wordBreak: "break-all",
              width: "250px",
              textIndent:"50px",
              fontSize: "20px",
              color:tcolor
            }}
          >
            {state.text2}
          </Typography>
        
        </div>
        <form >
          <input
            type="text"
            placeholder="text1"
            name="text1"
            value={state.text1}
            onChange={onchangetext}
            maxLength={50}
            style={{
              margin: "20px",
              padding: "7px",
              outline: "none",
              border: "none",
              backgroundColor: "rgba(128, 128, 128, 0.251)",
              borderRadius: "5px",
              fontSize: "17px",
            }}
          />
          <input
            type="text"
            placeholder="text2"
            name="text2"
            value={state.text2}
            onChange={onchangetext}
            maxLength={50}
            style={{
              margin: "20px",
              padding: "7px",
              outline: "none",
              border: "none",
              backgroundColor: "rgba(128, 128, 128, 0.251)",
              borderRadius: "5px",
              fontSize: "17px",
            }}
          />
          <div style={{display:"flex",margin:"20px"}}>
            <span style={{marginLeft:"150px",fontSize:"18px"}}>Change Text Color</span>
            <input type="color" value={tcolor} onChange={(e)=>setTcolor(e.target.value)} style={{marginLeft:"10px"}}/>
          </div>
         <Button onClick={downfn}  sx={{width:"200px",margin:"20px 150px"}} variant="contained">Download</Button>
        </form>
      </Box>
    </Box>
  );
};
