// colors.ts
export const colors = {
    Blue: [
      "#0000FF", "#0099FF", "#0033FF", "#0066FF", "#0044FF", 
      "#0055FF", "#0077FF", "#0088FF", "#0022FF", "#0011FF"
    ],
    Green: [
      "#008000", "#00FF00", "#007700", "#006600", "#004400", 
      "#005500", "#003300", "#00AA00", "#009900", "#00BB00"
    ],
    Red: [
      "#FF0000", "#FF3333", "#FF4444", "#FF6666", "#FF5555", 
      "#FF7777", "#FF8888", "#FF9999", "#FFAAAA", "#FFBBBB"
    ],
    Yellow: [
      "#FFFF00", "#FFFF33", "#FFFF44", "#FFFF66", "#FFFF55", 
      "#FFFF77", "#FFFF88", "#FFFF99", "#FFFFAA", "#FFFFBB"
    ],
    Orange: [
      "#FFA500", "#FFB200", "#FFC100", "#FFD200", "#FFE300", 
      "#FFF400", "#FFA600", "#FFB700", "#FFC800", "#FFD900"
    ],
    Pink: [
      "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF83C3", "#FF92D2", 
      "#FFA2E2", "#FFB1F1", "#FFC2FF", "#FFD0DF", "#FFE0EF"
    ],
  };
  
  export const getRandomColor = (): string => {
    const colorGroups = Object.values(colors);
    const randomGroup = colorGroups[Math.floor(Math.random() * colorGroups.length)];
    return randomGroup[Math.floor(Math.random() * randomGroup.length)];
  };
  