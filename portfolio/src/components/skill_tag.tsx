type skillTag = {
    text: string,
    bg_tag: string, 
    text_color: string
    hover: string,
}

export const SkillTag = ({text, bg_tag, text_color,hover}:skillTag,) => {
  return (
    <div className={`inline-block ${bg_tag} ${hover} rounded-lg px-[8px] py-[4px] mb-[8px] mr-[8px] transition-colors duration-300`}>
      <span className={`inter_400 ${text_color} text-[12px]`}>{text}</span>
    </div>
  );
}