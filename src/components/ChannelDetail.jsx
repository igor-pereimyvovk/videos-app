import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { ChannelCard, VideoCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0])
        );

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box sx={{ flex: 1, overflow: "auto" }}>
            <Box>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%)",
                        zIndex: 10,
                        height: "300px",
                    }}
                />
                <ChannelCard channel={channelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" p={2}>
                <Videos videos={videos}></Videos>
            </Box>
        </Box>
    );
};

export default ChannelDetail;
