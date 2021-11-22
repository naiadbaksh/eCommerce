const INITIAL_STATE = {
  sections: [
    {
      title: "coats",
      imageUrl:
        "https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Coats/default/J822_1.jpg",
      id: 1,
      linkUrl: "shop/coats",
    },
    {
      title: "shirts",
      imageUrl:
        "https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Shirts/default/H6407_1.jpg",
      id: 2,
      linkUrl: "shop/shirts",
    },
    {
      title: "shoes",
      imageUrl:
        "https://cdn.suitsupply.com/image/upload/c_pad,g_center,w_2600,b_rgb:efefef,bo_200px_solid_rgb:efefef/b_rgb:efefef,c_lpad,g_center,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Shoes/default/FW1003_1.jpg",
      id: 3,
      linkUrl: "shop/shoes",
    },
    {
      title: "suits",
      imageUrl:
        "https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Suits/default/P6307_1.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/suits",
    },
    {
      title: "eveningwear",
      imageUrl:
        "https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Jackets/default/C1199_1.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/eveningwear",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
