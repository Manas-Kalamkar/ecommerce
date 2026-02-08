import styled from "styled-components";


const Contact = () => {


  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="hidden"
              name="access_key"
              value="f67735fd-7f72-41ce-8f49-a46573efdff4"
            />

            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              required
              autoComplete="off"
              placeholder="Enter your message..."
              cols={30}
              rows={10}
            />
            <input type="submit" value={"send"} />
          </form>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13482.621653306736!2d73.92842827437693!3d18.509339740455317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c048e2ca5ba7%3A0xf8f8f4a792c1beb2!2sMagarpatta%20City!5e0!3m2!1sen!2sin!4v1768898427374!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section` 
  padding: 5rem 0;
  margin:0 10rem;
  text-align: center;

  .container {
    display:flex;
    justify-content:center;
    align-items:center;
    gap:6rem;
    margin:auto;

      .contact-form {
        width:100rem;
        max-width: 200rem;
        margin: none;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
        .location{
        border-left:1px ${({ theme }) => theme.colors.btn} solid;
        padding:6rem;
        min-width:70%;
        }
    }

  @media(max-width: ${({ theme }) => theme.media.mobile}){
    .container{
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    .contact-form{
    width:90vw}
    
    .location{
    border:none;
    width:250%;
    margin:none;}
    }

  }

  @media(max-width: ${({ theme }) => theme.media.tab}){
    .container{
    display:flex;
    justify-content:center;
    align-items:center;
    
    .contact-form{
    margin:auto;
    .location{
    width:250%; }

    .location{
    width:100rem
    }

  }
}
  `;
export default Contact;
