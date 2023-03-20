const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Começar a musica"),
  async execute(interaction) {
    await interaction.reply("Pronto!");
  },
};
