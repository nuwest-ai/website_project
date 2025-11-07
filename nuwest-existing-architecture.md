# nuwest.ai Holding Page — Existing AWS Architecture

## Summary
Static holding page hosted on AWS with global delivery and TLS. Designed for low cost, high reliability, and quick iteration.

## Components
- **Route 53**: DNS for `nuwest.ai` and `www.nuwest.ai`.
- **ACM**: TLS certificate in us-east-1 for CloudFront.
- **CloudFront**: CDN distribution with:
  - Origin Access Control to restrict S3
  - Default TTLs and compression
  - Optional AWS WAF association for basic rules
- **S3 (Static Site Bucket)**: Private bucket for website assets, read by CloudFront only.
- **Build/Deploy**: Local build or GitHub Actions pushing versioned assets to S3.
- **Logging**: Access logs to a dedicated S3 bucket with lifecycle policy.

## Request Flow
```
Client -> CloudFront (TLS) -> OAC -> S3 Bucket
```

## Security
- Public access blocked on S3, bucket policy limited to CloudFront OAC
- TLS via ACM, HSTS at CloudFront
- Optional WAF for common exploits and bot control

## Cost Profile
Single-digit USD per month under typical traffic.

## Operations
- Deploy using `aws s3 sync` or CI
- Version objects with cache-busting file names
- Invalidations for critical updates

## Future Enhancements
- Add preview environments per branch
- Introduce serverless edge for A/B tests
- Wire telemetry to evidence store for marketing analytics