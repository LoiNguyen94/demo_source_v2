import SpringPathColor from './extra/spring_path_color';

export default function SvgTabPartnerIcon({
  color = '#B6BDCB',
  colorFocus,
  keyFocus,
}: {
  color?: string;
  colorFocus?: string;
  keyFocus?: number;
}) {
  const focus = keyFocus !== 1
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" fill="white" />
      <SpringPathColor
        d={[
          'M14.9996 3.44531C12.6024 3.44531 10.6521 5.39561 10.6521 7.79287C10.6521 10.1901 12.6024 12.1404 14.9996 12.1404C17.3969 12.1404 19.3472 10.1901 19.3472 7.79287C19.3472 5.39565 17.3969 3.44531 14.9996 3.44531ZM14.9996 10.6756C13.4101 10.6756 12.1169 9.38242 12.1169 7.79287C12.1169 6.20337 13.4101 4.91016 14.9996 4.91016C16.5892 4.91016 17.8824 6.20332 17.8824 7.79287C17.8824 9.38242 16.5892 10.6756 14.9996 10.6756ZM4.1313 10.7413C4.1313 8.94689 5.59112 7.48707 7.3855 7.48707C9.17989 7.48707 10.6397 8.94689 10.6397 10.7413C10.6397 12.5357 9.17984 13.9955 7.3855 13.9955C5.59112 13.9955 4.13125 12.5357 4.1313 10.7413ZM5.5961 10.7413C5.5961 11.7279 6.39878 12.5306 7.38545 12.5306C8.37212 12.5306 9.17481 11.7279 9.17481 10.7413C9.17481 9.7546 8.37212 8.95191 7.38545 8.95191C6.39878 8.95191 5.5961 9.7546 5.5961 10.7413ZM21.3907 15.5398H23.8379C25.8572 15.5398 27.5 17.1827 27.5 19.2019V23.114C27.5 24.3255 26.5143 25.3112 25.3027 25.3112H4.69727C3.48569 25.3112 2.5 24.3255 2.5 23.114V19.2019C2.5 17.1827 4.14282 15.5398 6.16211 15.5398H8.60928C8.94233 15.5398 9.2648 15.5853 9.57168 15.669C10.1771 14.479 11.413 13.6613 12.8372 13.6613H17.1628C18.587 13.6613 19.8229 14.479 20.4283 15.669C20.7352 15.5853 21.0577 15.5398 21.3907 15.5398ZM9.17505 23.8464V17.3235C9.17505 17.2422 9.17866 17.1616 9.18394 17.0815C9.00063 17.0317 8.80811 17.0047 8.60928 17.0047H6.16211C4.95054 17.0047 3.96484 17.9904 3.96484 19.202V23.114C3.96484 23.5179 4.29341 23.8464 4.69727 23.8464H9.17505ZM10.6399 23.8464H19.3601V17.3235C19.3601 16.1119 18.3744 15.1262 17.1628 15.1262H12.8372C11.6256 15.1262 10.6399 16.1119 10.6399 17.3235V23.8464ZM25.3027 23.8464C25.7066 23.8464 26.0352 23.5179 26.0352 23.114V19.2019C26.0352 17.9904 25.0495 17.0047 23.8379 17.0047H21.3907C21.1919 17.0047 20.9994 17.0317 20.8161 17.0814C20.8213 17.1615 20.825 17.2421 20.825 17.3235V23.8464H25.3027ZM19.3601 10.7413C19.3601 8.94689 20.82 7.48707 22.6143 7.48707C24.4087 7.48707 25.8685 8.94689 25.8685 10.7413C25.8685 12.5357 24.4087 13.9955 22.6143 13.9955C20.82 13.9955 19.3602 12.5357 19.3601 10.7413ZM20.825 10.7413C20.825 11.7279 21.6277 12.5306 22.6143 12.5306C23.601 12.5306 24.4037 11.7279 24.4037 10.7413C24.4037 9.7546 23.601 8.95191 22.6143 8.95191C21.6277 8.95191 20.825 9.7546 20.825 10.7413Z',
          'M4.1313 10.7413L4.5313 10.7413V10.7413H4.1313ZM9.57168 15.669L9.46644 16.0549L9.78057 16.1406L9.9282 15.8504L9.57168 15.669ZM20.4283 15.669L20.0718 15.8504L20.2194 16.1406L20.5336 16.0549L20.4283 15.669ZM9.17505 23.8464V24.2464H9.57505V23.8464H9.17505ZM9.18394 17.0815L9.58307 17.1077L9.60456 16.7812L9.28872 16.6955L9.18394 17.0815ZM19.3601 23.8464V24.2464H19.7601V23.8464H19.3601ZM10.6399 23.8464H10.2399V24.2464H10.6399V23.8464ZM20.8161 17.0814L20.7114 16.6954L20.3954 16.7811L20.4169 17.1077L20.8161 17.0814ZM20.825 23.8464H20.425V24.2464H20.825V23.8464ZM19.3601 10.7413H18.9601V10.7413L19.3601 10.7413ZM20.825 10.7413L20.425 10.7413V10.7413H20.825ZM11.0521 7.79287C11.0521 5.61652 12.8233 3.84531 14.9996 3.84531V3.04531C12.3815 3.04531 10.2521 5.17469 10.2521 7.79287H11.0521ZM14.9996 11.7404C12.8233 11.7404 11.0521 9.96922 11.0521 7.79287H10.2521C10.2521 10.4111 12.3815 12.5404 14.9996 12.5404V11.7404ZM18.9472 7.79287C18.9472 9.96922 17.176 11.7404 14.9996 11.7404V12.5404C17.6178 12.5404 19.7472 10.4111 19.7472 7.79287H18.9472ZM14.9996 3.84531C17.176 3.84531 18.9472 5.61657 18.9472 7.79287H19.7472C19.7472 5.17474 17.6178 3.04531 14.9996 3.04531V3.84531ZM11.7169 7.79287C11.7169 9.60334 13.1892 11.0756 14.9996 11.0756V10.2756C13.631 10.2756 12.5169 9.16151 12.5169 7.79287H11.7169ZM14.9996 4.51016C13.1892 4.51016 11.7169 5.98246 11.7169 7.79287H12.5169C12.5169 6.42428 13.631 5.31016 14.9996 5.31016V4.51016ZM18.2824 7.79287C18.2824 5.98241 16.8101 4.51016 14.9996 4.51016V5.31016C16.3683 5.31016 17.4824 6.42423 17.4824 7.79287H18.2824ZM14.9996 11.0756C16.8101 11.0756 18.2824 9.60334 18.2824 7.79287H17.4824C17.4824 9.16151 16.3683 10.2756 14.9996 10.2756V11.0756ZM7.3855 7.08707C5.3702 7.08707 3.7313 8.72597 3.7313 10.7413H4.5313C4.5313 9.1678 5.81203 7.88707 7.3855 7.88707V7.08707ZM11.0397 10.7413C11.0397 8.72597 9.4008 7.08707 7.3855 7.08707V7.88707C8.95897 7.88707 10.2397 9.1678 10.2397 10.7413H11.0397ZM7.3855 14.3955C9.40075 14.3955 11.0397 12.7566 11.0397 10.7413H10.2397C10.2397 12.3147 8.95893 13.5955 7.3855 13.5955V14.3955ZM3.7313 10.7413C3.73125 12.7566 5.37021 14.3955 7.3855 14.3955V13.5955C5.81202 13.5955 4.53126 12.3147 4.5313 10.7413L3.7313 10.7413ZM7.38545 12.1306C6.6197 12.1306 5.9961 11.507 5.9961 10.7413H5.1961C5.1961 11.9489 6.17787 12.9306 7.38545 12.9306V12.1306ZM8.77481 10.7413C8.77481 11.507 8.15121 12.1306 7.38545 12.1306V12.9306C8.59304 12.9306 9.57481 11.9489 9.57481 10.7413H8.77481ZM7.38545 9.35191C8.15121 9.35191 8.77481 9.97551 8.77481 10.7413H9.57481C9.57481 9.53369 8.59304 8.55191 7.38545 8.55191V9.35191ZM5.9961 10.7413C5.9961 9.97551 6.6197 9.35191 7.38545 9.35191V8.55191C6.17787 8.55191 5.1961 9.53369 5.1961 10.7413H5.9961ZM23.8379 15.1398H21.3907V15.9398H23.8379V15.1398ZM27.9 19.2019C27.9 16.9617 26.0781 15.1398 23.8379 15.1398V15.9398C25.6363 15.9398 27.1 17.4036 27.1 19.2019H27.9ZM27.9 23.114V19.2019H27.1V23.114H27.9ZM25.3027 25.7112C26.7352 25.7112 27.9 24.5464 27.9 23.114H27.1C27.1 24.1046 26.2934 24.9112 25.3027 24.9112V25.7112ZM4.69727 25.7112H25.3027V24.9112H4.69727V25.7112ZM2.1 23.114C2.1 24.5464 3.26478 25.7112 4.69727 25.7112V24.9112C3.70661 24.9112 2.9 24.1046 2.9 23.114H2.1ZM2.1 19.2019V23.114H2.9V19.2019H2.1ZM6.16211 15.1398C3.92191 15.1398 2.1 16.9617 2.1 19.2019H2.9C2.9 17.4036 4.36374 15.9398 6.16211 15.9398V15.1398ZM8.60928 15.1398H6.16211V15.9398H8.60928V15.1398ZM9.67692 15.2831C9.3368 15.1904 8.97897 15.1398 8.60928 15.1398V15.9398C8.9057 15.9398 9.19279 15.9803 9.46644 16.0549L9.67692 15.2831ZM12.8372 13.2613C11.256 13.2613 9.88579 14.1693 9.21516 15.4877L9.9282 15.8504C10.4683 14.7887 11.57 14.0613 12.8372 14.0613V13.2613ZM17.1628 13.2613H12.8372V14.0613H17.1628V13.2613ZM20.7848 15.4877C20.1142 14.1693 18.744 13.2613 17.1628 13.2613V14.0613C18.43 14.0613 19.5317 14.7887 20.0718 15.8504L20.7848 15.4877ZM21.3907 15.1398C21.021 15.1398 20.6632 15.1904 20.3231 15.2831L20.5336 16.0549C20.8072 15.9803 21.0943 15.9398 21.3907 15.9398V15.1398ZM8.77505 17.3235V23.8464H9.57505V17.3235H8.77505ZM8.7848 17.0552C8.77917 17.1407 8.77505 17.2306 8.77505 17.3235H9.57505C9.57505 17.2538 9.57815 17.1825 9.58307 17.1077L8.7848 17.0552ZM8.60928 17.4047C8.7717 17.4047 8.92901 17.4268 9.07915 17.4675L9.28872 16.6955C9.07226 16.6367 8.84451 16.6047 8.60928 16.6047V17.4047ZM6.16211 17.4047H8.60928V16.6047H6.16211V17.4047ZM4.36484 19.202C4.36484 18.2113 5.17145 17.4047 6.16211 17.4047V16.6047C4.72962 16.6047 3.56484 17.7695 3.56484 19.202H4.36484ZM4.36484 23.114V19.202H3.56484V23.114H4.36484ZM4.69727 23.4464C4.51432 23.4464 4.36484 23.2969 4.36484 23.114H3.56484C3.56484 23.7388 4.07249 24.2464 4.69727 24.2464V23.4464ZM9.17505 23.4464H4.69727V24.2464H9.17505V23.4464ZM19.3601 23.4464H10.6399V24.2464H19.3601V23.4464ZM18.9601 17.3235V23.8464H19.7601V17.3235H18.9601ZM17.1628 15.5262C18.1535 15.5262 18.9601 16.3328 18.9601 17.3235H19.7601C19.7601 15.891 18.5953 14.7262 17.1628 14.7262V15.5262ZM12.8372 15.5262H17.1628V14.7262H12.8372V15.5262ZM11.0399 17.3235C11.0399 16.3328 11.8465 15.5262 12.8372 15.5262V14.7262C11.4047 14.7262 10.2399 15.891 10.2399 17.3235H11.0399ZM11.0399 23.8464V17.3235H10.2399V23.8464H11.0399ZM25.6352 23.114C25.6352 23.2969 25.4857 23.4464 25.3027 23.4464V24.2464C25.9275 24.2464 26.4352 23.7388 26.4352 23.114H25.6352ZM25.6352 19.2019V23.114H26.4352V19.2019H25.6352ZM23.8379 17.4047C24.8286 17.4047 25.6352 18.2113 25.6352 19.2019H26.4352C26.4352 17.7695 25.2704 16.6047 23.8379 16.6047V17.4047ZM21.3907 17.4047H23.8379V16.6047H21.3907V17.4047ZM20.9208 17.4675C21.071 17.4267 21.2284 17.4047 21.3907 17.4047V16.6047C21.1554 16.6047 20.9277 16.6367 20.7114 16.6954L20.9208 17.4675ZM21.225 17.3235C21.225 17.2305 21.2208 17.1406 21.2152 17.0551L20.4169 17.1077C20.4219 17.1824 20.425 17.2537 20.425 17.3235H21.225ZM21.225 23.8464V17.3235H20.425V23.8464H21.225ZM25.3027 23.4464H20.825V24.2464H25.3027V23.4464ZM22.6143 7.08707C20.5991 7.08707 18.9601 8.72597 18.9601 10.7413H19.7601C19.7601 9.1678 21.0409 7.88707 22.6143 7.88707V7.08707ZM26.2685 10.7413C26.2685 8.72597 24.6296 7.08707 22.6143 7.08707V7.88707C24.1878 7.88707 25.4685 9.1678 25.4685 10.7413H26.2685ZM22.6143 14.3955C24.6296 14.3955 26.2685 12.7566 26.2685 10.7413H25.4685C25.4685 12.3147 24.1878 13.5955 22.6143 13.5955V14.3955ZM18.9601 10.7413C18.9602 12.7566 20.5991 14.3955 22.6143 14.3955V13.5955C21.0409 13.5955 19.7602 12.3147 19.7601 10.7413L18.9601 10.7413ZM22.6143 12.1306C21.8486 12.1306 21.225 11.507 21.225 10.7413H20.425C20.425 11.9489 21.4068 12.9306 22.6143 12.9306V12.1306ZM24.0037 10.7413C24.0037 11.507 23.3801 12.1306 22.6143 12.1306V12.9306C23.8219 12.9306 24.8037 11.9489 24.8037 10.7413H24.0037ZM22.6143 9.35191C23.3801 9.35191 24.0037 9.97551 24.0037 10.7413H24.8037C24.8037 9.53369 23.8219 8.55191 22.6143 8.55191V9.35191ZM21.225 10.7413C21.225 9.97551 21.8486 9.35191 22.6143 9.35191V8.55191C21.4068 8.55191 20.425 9.53369 20.425 10.7413L21.225 10.7413Z',
        ]}
        focus={focus}
        colorFocus={colorFocus}
        color={color}
      />
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9996 3.44531C12.6024 3.44531 10.6521 5.39561 10.6521 7.79287C10.6521 10.1901 12.6024 12.1404 14.9996 12.1404C17.3969 12.1404 19.3472 10.1901 19.3472 7.79287C19.3472 5.39565 17.3969 3.44531 14.9996 3.44531ZM14.9996 10.6756C13.4101 10.6756 12.1169 9.38242 12.1169 7.79287C12.1169 6.20337 13.4101 4.91016 14.9996 4.91016C16.5892 4.91016 17.8824 6.20332 17.8824 7.79287C17.8824 9.38242 16.5892 10.6756 14.9996 10.6756ZM4.1313 10.7413C4.1313 8.94689 5.59112 7.48707 7.3855 7.48707C9.17989 7.48707 10.6397 8.94689 10.6397 10.7413C10.6397 12.5357 9.17984 13.9955 7.3855 13.9955C5.59112 13.9955 4.13125 12.5357 4.1313 10.7413ZM5.5961 10.7413C5.5961 11.7279 6.39878 12.5306 7.38545 12.5306C8.37212 12.5306 9.17481 11.7279 9.17481 10.7413C9.17481 9.7546 8.37212 8.95191 7.38545 8.95191C6.39878 8.95191 5.5961 9.7546 5.5961 10.7413ZM21.3907 15.5398H23.8379C25.8572 15.5398 27.5 17.1827 27.5 19.2019V23.114C27.5 24.3255 26.5143 25.3112 25.3027 25.3112H4.69727C3.48569 25.3112 2.5 24.3255 2.5 23.114V19.2019C2.5 17.1827 4.14282 15.5398 6.16211 15.5398H8.60928C8.94233 15.5398 9.2648 15.5853 9.57168 15.669C10.1771 14.479 11.413 13.6613 12.8372 13.6613H17.1628C18.587 13.6613 19.8229 14.479 20.4283 15.669C20.7352 15.5853 21.0577 15.5398 21.3907 15.5398ZM9.17505 23.8464V17.3235C9.17505 17.2422 9.17866 17.1616 9.18394 17.0815C9.00063 17.0317 8.80811 17.0047 8.60928 17.0047H6.16211C4.95054 17.0047 3.96484 17.9904 3.96484 19.202V23.114C3.96484 23.5179 4.29341 23.8464 4.69727 23.8464H9.17505ZM10.6399 23.8464H19.3601V17.3235C19.3601 16.1119 18.3744 15.1262 17.1628 15.1262H12.8372C11.6256 15.1262 10.6399 16.1119 10.6399 17.3235V23.8464ZM25.3027 23.8464C25.7066 23.8464 26.0352 23.5179 26.0352 23.114V19.2019C26.0352 17.9904 25.0495 17.0047 23.8379 17.0047H21.3907C21.1919 17.0047 20.9994 17.0317 20.8161 17.0814C20.8213 17.1615 20.825 17.2421 20.825 17.3235V23.8464H25.3027ZM19.3601 10.7413C19.3601 8.94689 20.82 7.48707 22.6143 7.48707C24.4087 7.48707 25.8685 8.94689 25.8685 10.7413C25.8685 12.5357 24.4087 13.9955 22.6143 13.9955C20.82 13.9955 19.3602 12.5357 19.3601 10.7413ZM20.825 10.7413C20.825 11.7279 21.6277 12.5306 22.6143 12.5306C23.601 12.5306 24.4037 11.7279 24.4037 10.7413C24.4037 9.7546 23.601 8.95191 22.6143 8.95191C21.6277 8.95191 20.825 9.7546 20.825 10.7413Z"
        fill={!focus ? color : colorFocus}
      />
      <path
        d="M4.1313 10.7413L4.5313 10.7413V10.7413H4.1313ZM9.57168 15.669L9.46644 16.0549L9.78057 16.1406L9.9282 15.8504L9.57168 15.669ZM20.4283 15.669L20.0718 15.8504L20.2194 16.1406L20.5336 16.0549L20.4283 15.669ZM9.17505 23.8464V24.2464H9.57505V23.8464H9.17505ZM9.18394 17.0815L9.58307 17.1077L9.60456 16.7812L9.28872 16.6955L9.18394 17.0815ZM19.3601 23.8464V24.2464H19.7601V23.8464H19.3601ZM10.6399 23.8464H10.2399V24.2464H10.6399V23.8464ZM20.8161 17.0814L20.7114 16.6954L20.3954 16.7811L20.4169 17.1077L20.8161 17.0814ZM20.825 23.8464H20.425V24.2464H20.825V23.8464ZM19.3601 10.7413H18.9601V10.7413L19.3601 10.7413ZM20.825 10.7413L20.425 10.7413V10.7413H20.825ZM11.0521 7.79287C11.0521 5.61652 12.8233 3.84531 14.9996 3.84531V3.04531C12.3815 3.04531 10.2521 5.17469 10.2521 7.79287H11.0521ZM14.9996 11.7404C12.8233 11.7404 11.0521 9.96922 11.0521 7.79287H10.2521C10.2521 10.4111 12.3815 12.5404 14.9996 12.5404V11.7404ZM18.9472 7.79287C18.9472 9.96922 17.176 11.7404 14.9996 11.7404V12.5404C17.6178 12.5404 19.7472 10.4111 19.7472 7.79287H18.9472ZM14.9996 3.84531C17.176 3.84531 18.9472 5.61657 18.9472 7.79287H19.7472C19.7472 5.17474 17.6178 3.04531 14.9996 3.04531V3.84531ZM11.7169 7.79287C11.7169 9.60334 13.1892 11.0756 14.9996 11.0756V10.2756C13.631 10.2756 12.5169 9.16151 12.5169 7.79287H11.7169ZM14.9996 4.51016C13.1892 4.51016 11.7169 5.98246 11.7169 7.79287H12.5169C12.5169 6.42428 13.631 5.31016 14.9996 5.31016V4.51016ZM18.2824 7.79287C18.2824 5.98241 16.8101 4.51016 14.9996 4.51016V5.31016C16.3683 5.31016 17.4824 6.42423 17.4824 7.79287H18.2824ZM14.9996 11.0756C16.8101 11.0756 18.2824 9.60334 18.2824 7.79287H17.4824C17.4824 9.16151 16.3683 10.2756 14.9996 10.2756V11.0756ZM7.3855 7.08707C5.3702 7.08707 3.7313 8.72597 3.7313 10.7413H4.5313C4.5313 9.1678 5.81203 7.88707 7.3855 7.88707V7.08707ZM11.0397 10.7413C11.0397 8.72597 9.4008 7.08707 7.3855 7.08707V7.88707C8.95897 7.88707 10.2397 9.1678 10.2397 10.7413H11.0397ZM7.3855 14.3955C9.40075 14.3955 11.0397 12.7566 11.0397 10.7413H10.2397C10.2397 12.3147 8.95893 13.5955 7.3855 13.5955V14.3955ZM3.7313 10.7413C3.73125 12.7566 5.37021 14.3955 7.3855 14.3955V13.5955C5.81202 13.5955 4.53126 12.3147 4.5313 10.7413L3.7313 10.7413ZM7.38545 12.1306C6.6197 12.1306 5.9961 11.507 5.9961 10.7413H5.1961C5.1961 11.9489 6.17787 12.9306 7.38545 12.9306V12.1306ZM8.77481 10.7413C8.77481 11.507 8.15121 12.1306 7.38545 12.1306V12.9306C8.59304 12.9306 9.57481 11.9489 9.57481 10.7413H8.77481ZM7.38545 9.35191C8.15121 9.35191 8.77481 9.97551 8.77481 10.7413H9.57481C9.57481 9.53369 8.59304 8.55191 7.38545 8.55191V9.35191ZM5.9961 10.7413C5.9961 9.97551 6.6197 9.35191 7.38545 9.35191V8.55191C6.17787 8.55191 5.1961 9.53369 5.1961 10.7413H5.9961ZM23.8379 15.1398H21.3907V15.9398H23.8379V15.1398ZM27.9 19.2019C27.9 16.9617 26.0781 15.1398 23.8379 15.1398V15.9398C25.6363 15.9398 27.1 17.4036 27.1 19.2019H27.9ZM27.9 23.114V19.2019H27.1V23.114H27.9ZM25.3027 25.7112C26.7352 25.7112 27.9 24.5464 27.9 23.114H27.1C27.1 24.1046 26.2934 24.9112 25.3027 24.9112V25.7112ZM4.69727 25.7112H25.3027V24.9112H4.69727V25.7112ZM2.1 23.114C2.1 24.5464 3.26478 25.7112 4.69727 25.7112V24.9112C3.70661 24.9112 2.9 24.1046 2.9 23.114H2.1ZM2.1 19.2019V23.114H2.9V19.2019H2.1ZM6.16211 15.1398C3.92191 15.1398 2.1 16.9617 2.1 19.2019H2.9C2.9 17.4036 4.36374 15.9398 6.16211 15.9398V15.1398ZM8.60928 15.1398H6.16211V15.9398H8.60928V15.1398ZM9.67692 15.2831C9.3368 15.1904 8.97897 15.1398 8.60928 15.1398V15.9398C8.9057 15.9398 9.19279 15.9803 9.46644 16.0549L9.67692 15.2831ZM12.8372 13.2613C11.256 13.2613 9.88579 14.1693 9.21516 15.4877L9.9282 15.8504C10.4683 14.7887 11.57 14.0613 12.8372 14.0613V13.2613ZM17.1628 13.2613H12.8372V14.0613H17.1628V13.2613ZM20.7848 15.4877C20.1142 14.1693 18.744 13.2613 17.1628 13.2613V14.0613C18.43 14.0613 19.5317 14.7887 20.0718 15.8504L20.7848 15.4877ZM21.3907 15.1398C21.021 15.1398 20.6632 15.1904 20.3231 15.2831L20.5336 16.0549C20.8072 15.9803 21.0943 15.9398 21.3907 15.9398V15.1398ZM8.77505 17.3235V23.8464H9.57505V17.3235H8.77505ZM8.7848 17.0552C8.77917 17.1407 8.77505 17.2306 8.77505 17.3235H9.57505C9.57505 17.2538 9.57815 17.1825 9.58307 17.1077L8.7848 17.0552ZM8.60928 17.4047C8.7717 17.4047 8.92901 17.4268 9.07915 17.4675L9.28872 16.6955C9.07226 16.6367 8.84451 16.6047 8.60928 16.6047V17.4047ZM6.16211 17.4047H8.60928V16.6047H6.16211V17.4047ZM4.36484 19.202C4.36484 18.2113 5.17145 17.4047 6.16211 17.4047V16.6047C4.72962 16.6047 3.56484 17.7695 3.56484 19.202H4.36484ZM4.36484 23.114V19.202H3.56484V23.114H4.36484ZM4.69727 23.4464C4.51432 23.4464 4.36484 23.2969 4.36484 23.114H3.56484C3.56484 23.7388 4.07249 24.2464 4.69727 24.2464V23.4464ZM9.17505 23.4464H4.69727V24.2464H9.17505V23.4464ZM19.3601 23.4464H10.6399V24.2464H19.3601V23.4464ZM18.9601 17.3235V23.8464H19.7601V17.3235H18.9601ZM17.1628 15.5262C18.1535 15.5262 18.9601 16.3328 18.9601 17.3235H19.7601C19.7601 15.891 18.5953 14.7262 17.1628 14.7262V15.5262ZM12.8372 15.5262H17.1628V14.7262H12.8372V15.5262ZM11.0399 17.3235C11.0399 16.3328 11.8465 15.5262 12.8372 15.5262V14.7262C11.4047 14.7262 10.2399 15.891 10.2399 17.3235H11.0399ZM11.0399 23.8464V17.3235H10.2399V23.8464H11.0399ZM25.6352 23.114C25.6352 23.2969 25.4857 23.4464 25.3027 23.4464V24.2464C25.9275 24.2464 26.4352 23.7388 26.4352 23.114H25.6352ZM25.6352 19.2019V23.114H26.4352V19.2019H25.6352ZM23.8379 17.4047C24.8286 17.4047 25.6352 18.2113 25.6352 19.2019H26.4352C26.4352 17.7695 25.2704 16.6047 23.8379 16.6047V17.4047ZM21.3907 17.4047H23.8379V16.6047H21.3907V17.4047ZM20.9208 17.4675C21.071 17.4267 21.2284 17.4047 21.3907 17.4047V16.6047C21.1554 16.6047 20.9277 16.6367 20.7114 16.6954L20.9208 17.4675ZM21.225 17.3235C21.225 17.2305 21.2208 17.1406 21.2152 17.0551L20.4169 17.1077C20.4219 17.1824 20.425 17.2537 20.425 17.3235H21.225ZM21.225 23.8464V17.3235H20.425V23.8464H21.225ZM25.3027 23.4464H20.825V24.2464H25.3027V23.4464ZM22.6143 7.08707C20.5991 7.08707 18.9601 8.72597 18.9601 10.7413H19.7601C19.7601 9.1678 21.0409 7.88707 22.6143 7.88707V7.08707ZM26.2685 10.7413C26.2685 8.72597 24.6296 7.08707 22.6143 7.08707V7.88707C24.1878 7.88707 25.4685 9.1678 25.4685 10.7413H26.2685ZM22.6143 14.3955C24.6296 14.3955 26.2685 12.7566 26.2685 10.7413H25.4685C25.4685 12.3147 24.1878 13.5955 22.6143 13.5955V14.3955ZM18.9601 10.7413C18.9602 12.7566 20.5991 14.3955 22.6143 14.3955V13.5955C21.0409 13.5955 19.7602 12.3147 19.7601 10.7413L18.9601 10.7413ZM22.6143 12.1306C21.8486 12.1306 21.225 11.507 21.225 10.7413H20.425C20.425 11.9489 21.4068 12.9306 22.6143 12.9306V12.1306ZM24.0037 10.7413C24.0037 11.507 23.3801 12.1306 22.6143 12.1306V12.9306C23.8219 12.9306 24.8037 11.9489 24.8037 10.7413H24.0037ZM22.6143 9.35191C23.3801 9.35191 24.0037 9.97551 24.0037 10.7413H24.8037C24.8037 9.53369 23.8219 8.55191 22.6143 8.55191V9.35191ZM21.225 10.7413C21.225 9.97551 21.8486 9.35191 22.6143 9.35191V8.55191C21.4068 8.55191 20.425 9.53369 20.425 10.7413L21.225 10.7413Z"
        fill={!focus ? color : colorFocus}
      /> */}
    </svg>
  );
}
