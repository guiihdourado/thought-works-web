import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import startCase from 'lodash/startCase';
import copyToClipBoard from 'copy-to-clipboard';

import api from '../services/api';

import { Container, Title, Button, GoBack } from '../styles/pages/Slug'

export default function Account() {
  const { query, back } = useRouter();
  const [copiedLink, setCopiedLink] = useState(false);

  function handleShareLink() {
    api.post('/links', {
      slug: query.slug,
    }).then(({ data }) => {
      copyToClipBoard(data);
      setCopiedLink(true);
    });
  }

  useEffect(() => {
    if(copiedLink) {
      setTimeout(() => {
        setCopiedLink(false);
      }, 3000);
    }
  }, [copiedLink])

  return (
    <Container>
      <Title>This page is for {startCase(query.slug)}</Title>
      <Button type="button" onClick={handleShareLink} copiedLink={copiedLink}>
        {copiedLink ? 'Link Account copied to clipboard' : 'Share Link'}
      </Button>
      <GoBack onClick={() => back()}>Go Back</GoBack>
    </Container>
  )
}
