function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Ensure this file is in the same folder
  link.download = 'resume.pdf';
  link.click();
}







