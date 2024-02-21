import React from 'react';

function DownloadCVButton() {
  const handleDownload = () => {
    const url = "/src/components/Cv/monelisi madubela cv 30 (1).pdf";
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'monelisi_madubela_cv.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading the file: ', error);
      });
  };

  return (
    <button className="download-cv-button" onClick={handleDownload}>
      Download CV
    </button>
  );
}

export default DownloadCVButton;
