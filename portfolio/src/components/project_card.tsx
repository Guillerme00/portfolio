import { SkillTag } from "./skill_tag";

type ProjectCard = {
  background: string;
  bg_tag: string;
  text_color: string;
  tag_hover: string;
  button_hover: string;
  button_background: string;
  button_full_text: string;
  button_empty_border_hover: string;
  button_empty_text_hover: string;
  button_border_color: string;
  button_empty_text: string;
  title_text_color: string;
  title_text_variant: string;

  project_name: string;
  project_text: string;
  techs: string[];
  live_link: string;
  github_link: string;
  project_photo: string;
};

const ProjectCard = ({
  title_text_variant,
  title_text_color,
  bg_tag,
  tag_hover,
  text_color,
  button_background,
  button_border_color,
  button_empty_border_hover,
  button_empty_text,
  button_empty_text_hover,
  button_full_text,
  button_hover,
  github_link,
  live_link,
  project_name,
  project_text,
  techs,
  project_photo,
  background,
}: ProjectCard) => {
  return (
    <div
      className={`max-w-[430px] overflow-hidden rounded-xl border border-zinc-700 ${background} hover:-translate-y-[8px] transition-transform duration-300`}
    >
      {/* Image */}
      <div className="w-full">
        <img
          src={project_photo}
          alt="Sistema de Agendamento Médico"
          className="w-full object-cover max-w-[430px] max-h-[205px]"
        />
      </div>
      {/* Content */}
      <div className="p-[32px]">
        <h2
          className={`text-[24px] geist-700 ${title_text_color} leading-tight`}
        >
          {project_name}
        </h2>

        <p
          className={`font-[16px] pt-[8px] inter_400 ${title_text_variant} leading-relaxed`}
        >
          {project_text}
        </p>

        {/* Techs */}
        <div className="">
          <div className="flex flex-wrap gap-[3px] pt-[16px]">
            {techs.map((item) => (
              <SkillTag
                text={item}
                bg_tag={bg_tag}
                hover={tag_hover}
                text_color={text_color}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex w-full gap-[16px] pt-[16px]">
            <button
              className={`flex-1 py-[16px] px-[26px] rounded-full ${button_hover} ${button_background} ${button_full_text} inter cursor-pointer transition-colors duration-300`}
              onClick={() => {
                window.open(live_link, "_blank");
              }}
            >
              LIVE DEMO
            </button>
            <button
              className={`flex-1 py-[16px] px-[26px] rounded-full bg-transparent border-[1px] ${button_empty_border_hover} ${button_empty_text_hover} ${button_border_color} ${button_empty_text} inter cursor-pointer transition-colors duration-300`}
              onClick={() => {
                window.open(github_link, "_blank");
              }}
            >
              GITHUB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
