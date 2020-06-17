// Global
const HOME = "/";
const SEARCH = "/search";

// Videos
const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id";

const routes = {
    home: HOME,
    search: SEARCH,
    videos: VIDEOS,
    videoDetail: id => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEOS_DETAIL;
        }
    }
};

export default import("express").RouterOptions;