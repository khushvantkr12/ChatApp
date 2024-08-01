import { useEffect, useState, useRef } from "react";
import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { uploadFile } from "../../../service/api";
import EmojiPicker from 'emoji-picker-react';

const Container = styled(Box)`
  height: 75px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  margin-top: 16px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 5px;
  width: 80%;
  margin: 15px 12px 24px 0;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 17px;
  height: 40px;
  padding-left: 15px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
  cursor: pointer;
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close emoji picker only if clicked outside of emoji picker and button
      if (
        event.target.id !== "emoji-open" &&
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    // Add event listener on component mount
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener on component unmount (cleanup)
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          let response = await uploadFile(data);
          setImage(response.data);
        } catch (error) {
          console.error("Error while uploading file:", error);
        }
      }
    };
    getImage();
  }, [file, setImage]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  const onEmojiClick = (emojiObject) => {
    setValue(prevInput => prevInput + emojiObject.emoji);
  };

  return (
    <Container>
      {showEmojiPicker && (
        <div ref={emojiPickerRef}>
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            style={{
              position: 'absolute',
              bottom: '50px',
              right: '500px', // Adjust positioning as needed
              zIndex: '20',
              height: '54%',
              width: '20%',
            }}
          />
        </div>
      )}

      <EmojiEmotionsOutlined
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        id="emoji-open"
        style={{
          cursor:"pointer"
        }}
      />

      <label htmlFor="fileinput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileinput"
        style={{ display: 'none' }}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
