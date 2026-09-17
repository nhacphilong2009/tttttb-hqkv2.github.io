JavaScript
function doGet()
{
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Đang lấy vị trí GPS...')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
